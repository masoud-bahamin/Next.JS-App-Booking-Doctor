"use client";

import { UpdateUser } from "@/app/account/page";
import { authContext } from "@/app/context/authContext";
import updateScema from "@/validations/clientValidations/accounForm";
import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

interface AccountFormProps {
  userInfo: UpdateUser;
  token: string | null;
}

export default function AccountForm() {
  const [loading, setLoading] = useState(false);

  const { userInfo } = useContext(authContext) as {
    logout: () => void;
    userInfo: UpdateUser;
  };

  const updateUser = async (user: {}) => {
    if (userInfo === null) return false;
    setLoading(true);
    try {
      const res = await fetch(`/api/users/update/${userInfo._id}`, {
        method: "PUT",
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data);
      if (data.resulte) {
        Swal.fire({
          icon: "success",
          text: "update successfully",
        });
      }
      // getUserInfo(token)
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

  return (
    <div className=" font-Barlow">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold mb-8">Profile Setting</h3>
        <h3 className="text-lg text-prim font-semibold mb-8">
          {userInfo?.role}
        </h3>
      </div>
      <div className="flex gap-4">
        <div className="hidden lg:block lg:min-w-[280px]">
          <p className="text-prim text-xs">Personal Details</p>
        </div>
        <div className="px-0 lg:px-6 lg:border-l">
          <h3 className="text-lg font-medium mb-8">Your Details</h3>
          <Formik
            onSubmit={(infos, { resetForm }) => {
              updateUser(infos);
              resetForm();
            }}
            initialValues={{
              name: "",
              phone: "",
              age: userInfo?.age || 18,
              bio: "",
              location: "",
              email: userInfo?.email,
              username: userInfo?.username,
            }}
            validationSchema={updateScema}
          >
            {({ errors, touched }) => (
              <Form className="xl:min-w-[600px]">
                {touched.email ? (
                  <p className="text-xs py-2 text-rose-400">
                    you can NOT change it
                  </p>
                ) : null}
                <Field
                  name="email"
                  className="border outline-none w-full p-3 mb-3 text-gray-500"
                  placeholder={userInfo?.email || "Email..."}
                  type="email"
                />
                {touched.username ? (
                  <p className="text-xs py-2 text-rose-400">
                    you can NOT change it
                  </p>
                ) : null}
                <Field
                  name="username"
                  className="border outline-none w-full p-3 mb-3 text-gray-500"
                  placeholder={userInfo?.username || "UserName..."}
                  type="text"
                />
                {errors.name && touched.name ? (
                  <p className="text-xs py-2 text-rose-400">{errors.name}</p>
                ) : null}
                <Field
                  name="name"
                  className="border outline-none w-full p-3 mb-3 text-gray-500"
                  placeholder={userInfo?.name || "Name..."}
                  type="text"
                />
                {errors.phone && touched.phone ? (
                  <p className="text-xs py-2 text-rose-400">{errors.phone}</p>
                ) : null}
                <Field
                  name="phone"
                  className="border outline-none w-full p-3 mb-3 text-gray-500"
                  placeholder={userInfo?.phone || "Mobile Number..."}
                  type="text"
                />
                {errors.age && touched.age ? (
                  <p className="text-xs py-2 text-rose-400">{errors.age}</p>
                ) : null}
                <Field
                  name="age"
                  className="border outline-none w-full p-3 mb-3 text-gray-500"
                  placeholder={userInfo?.age || "Your Age..."}
                  type="number"
                />
                {errors.bio && touched.bio ? (
                  <p className="text-xs py-2 text-rose-400">{errors.bio}</p>
                ) : null}
                <Field
                  name="bio"
                  className="border outline-none w-full p-3 mb-3 text-gray-500 pb-12 flex"
                  placeholder={userInfo?.bio || "Bio..."}
                />
                <h3 className="text-lg font-medium mt-8 mb-6">Your Location</h3>
                <select
                  className="border outline-none w-full p-3 mb-3 text-gray-500 "
                  name=""
                  id=""
                >
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                </select>
                {errors.location && touched.location ? (
                  <p className="text-xs py-2 text-rose-400">
                    {errors.location}
                  </p>
                ) : null}
                <Field
                  name="location"
                  className="border outline-none w-full p-3 mb-3 text-gray-500"
                  placeholder={userInfo?.location || "Address..."}
                  type="text"
                />
                <div className="text-right">
                  {loading ? (
                    <button className="btn" disabled>
                      <span className="animate-pulse">Loading...</span>
                    </button>
                  ) : (
                    <button type="submit" className="btn">
                      Update
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
