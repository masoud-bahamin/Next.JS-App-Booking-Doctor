"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const initialContext: contextType = {
  userInfo: null,
  loading: true,
  register: (user: User & { role: "USER" | "DOCTOR" }) => { },
  updateUser: (user: UpdateType) => { },
  login: (user: LoginUser) => { },
  logout: () => { },
  bookAppointment: (data: AppointmentType) => { },
  getUserInfo: () => { },
  error: ""
}

export const authContext = createContext<contextType>(initialContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<null | UserType>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const login = async (user: LoginUser) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/login`, {
        method: "POST",
        body: JSON.stringify(user),
      });
      const data = await res.json();

      if (data.resulte) {
        Swal.fire({
          icon: "success",
          text: "your signing was successfully",
        });
        getUserInfo();
        router.push("/account");
      } else {
        Swal.fire({
          icon: "error",
          text: data.message,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "your signing was NOT successfully",
      });
      router.refresh();
    }

    setLoading(false);
  };

  const register = async (user: User & { role: "USER" | "DOCTOR" }) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/create`, {
        method: "POST",
        body: JSON.stringify(user),
      });
      const data = await res.json();

      if (data.resulte) {
        Swal.fire({
          icon: "success",
          text: "your signing was successfully",
        });
        router.push("/account");
        getUserInfo();
      } else {
        Swal.fire({
          icon: "error",
          text: data.message,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "your signing was NOT successfully",
      });
      router.refresh();
    }

    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/users/logout`, {
        method: "POST",
      });
      const data = await res.json();

      if (data.resulte) {
        router.refresh();
        Swal.fire({
          icon: "success",
          text: "your logout was successfully",
        });
        router.push("/");
        setUserInfo(null);
      } else {
        Swal.fire({
          icon: "error",
          text: data.message,
        });
        setError(data.message);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "please try again",
      });
      setError("catch error");
    }

    setLoading(false);
  };

  const getUserInfo = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/getUser`);
      const data = await res.json();
      if (data.resulte) {
        setUserInfo(data.user);
        setLoading(false);
      } else {
        setError(data.message);
        setLoading(false);
      }
    } catch (error) {
      setError("cath error in context");
    }

    setLoading(false);
  };

  const updateUser = async (user: UpdateType) => {
    if (userInfo === null) return false;
    setLoading(true);
    try {
      const res = await fetch(`/api/users/update/${userInfo._id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: user.name || userInfo?.name || "Name",
          phone: user.phone || userInfo?.phone || "No Phone Number",
          age: user.age || userInfo?.age || 18,
          bio: user.bio || userInfo?.bio || "Bio",
          location: user.location || userInfo?.location || "USA",
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.resulte) {
        Swal.fire({
          icon: "success",
          text: "update successfully",
        });
      }
      getUserInfo();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "update was NOT successfully",
      });
      setLoading(false);
      return false;
    }
    setLoading(false);
  };

  const bookAppointment = async (data: AppointmentType) => {
    setLoading(true)
    try {
      const res = await fetch("/api/rezervation/create", {
        method: "POST",
        body: JSON.stringify(data)
      })
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          text: "Your booking was successfull"
        })
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "Your booking was Not successfull"
      })
    }
    setLoading(false);
  }

  useEffect(() => {
    getUserInfo();
  }, []);


  return (
    <authContext.Provider
      value={{
        bookAppointment,
        updateUser,
        getUserInfo,
        userInfo,
        loading,
        register,
        error,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
