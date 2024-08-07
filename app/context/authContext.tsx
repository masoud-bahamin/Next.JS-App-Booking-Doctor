"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UpdateUser } from "../account/page";

interface User {
  username: string;
  password: string;
  email: string;
}

interface LoginUser {
  password: string;
  email: string;
}

interface UpdateType {
  name: string;
  phone: string;
  age: number;
  bio: string;
  location: string;
}

interface contextType {
  userInfo: UpdateUser | null;
  loading: boolean;
  register: (user: User & { role: "USER" | "DOCTOR" }) => void;
  updateUser: (user: UpdateType) => void;
  login: (user: LoginUser) => void;
  logout: () => void;
  getUserInfo: () => void;
  error: string;
}

export const authContext = createContext({} as contextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<null | UpdateUser>(null);
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
      } else {
        setError(data.message);
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
          name: user.name || userInfo?.name || "name",
          phone: user.phone || userInfo?.phone || 535,
          age: user.age || userInfo?.age || 20,
          bio: user.bio || userInfo?.bio || "bio",
          location: user.location || userInfo?.location || "location",
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
      // router.refresh();
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

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <authContext.Provider
      value={{
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
