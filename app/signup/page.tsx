"use client";

import signupValidations from "@/validations/clientValidations/signin";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Breadcrumb from "../components/modules/Breadcrumb/Breadcrumb";
import { authContext } from "../context/authContext";

export default function Signup() {
  const [role, setRole] = useState<"USER" | "DOCTOR">("USER");

  const { register, loading } = useContext(authContext);

  return (
    <div className="">
      <Breadcrumb route="SignUp" title="Sign Up" />
      <div className="max-w-5xl mx-auto flex items-center gap-5">
        <div className="hidden md:block">
          <Image width={600} height={10} src="/img/login-banner.png" alt="" />
        </div>
        <div>
          <div className="p-6 border rounded-md">
            <h3 className="text-xl font-medium mb-6">
              Doctor/Patient Register
            </h3>
            <Formik
              onSubmit={(values) => {
                if (!loading) {
                  register({
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    role,
                  });
                }
              }}
              initialValues={{
                email: "",
                username: "",
                password: "",
                repassword: "",
              }}
              validationSchema={signupValidations}
            >
              {({ errors, touched }) => (
                <Form className="xl:w-[500px]">
                  {errors.email && touched.email ? (
                    <p className="py-2 text-rose-400 text-xs w-full">
                      {errors.email}
                    </p>
                  ) : null}
                  <Field
                    name="email"
                    className="p-3 mb-3 rounded-md text-xs border border-slate-10 outline-none w-full"
                    placeholder={"email"}
                    type="email"
                  />
                  {errors.username && touched.username ? (
                    <p className="py-2 text-rose-400 text-xs w-full">
                      {errors.username}
                    </p>
                  ) : null}
                  <Field
                    name="username"
                    className="p-3 mb-3 rounded-md text-xs border border-slate-10 outline-none w-full"
                    placeholder="username"
                    type="text"
                  />
                  {errors.password && touched.password ? (
                    <p className="py-2 text-rose-400 text-xs w-full">
                      {errors.password}
                    </p>
                  ) : null}
                  <Field
                    name="password"
                    className="p-3 mb-3 rounded-md text-xs border border-slate-10 outline-none w-full"
                    placeholder="password"
                    type="password"
                  />
                  {errors.repassword && touched.repassword ? (
                    <p className="py-2 text-rose-400 text-xs w-full">
                      {errors.repassword}
                    </p>
                  ) : null}
                  <Field
                    name="repassword"
                    className="p-3 mb-5 rounded-md text-xs border border-slate-10 outline-none w-full"
                    placeholder="retype password"
                    type="password"
                  />
                  <h3 className="text-lg font-medium mb-3">Start as :</h3>
                  <div className="flex border rounded-md">
                    <div className="flex items-center gap-3 w-1/2 border-r p-4">
                      <input
                        className="rounded-full"
                        onChange={() => setRole("USER")}
                        type="radio"
                        name="roleCheckbox"
                        id="patientCheckbox"
                        defaultChecked
                      />
                      <label
                        htmlFor="patientCheckbox"
                        className="text-gray-500 text-sm"
                      >
                        Patient
                      </label>
                    </div>
                    <div className="flex items-center gap-3 w-1/2 p-4">
                      <input
                        className="rounded-full"
                        onChange={() => setRole("DOCTOR")}
                        type="radio"
                        name="roleCheckbox"
                        id="doctorCheckbox"
                      />
                      <label
                        htmlFor="doctorCheckbox"
                        className="text-gray-500 text-sm"
                      >
                        Doctor
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-3  p-4 mb-6">
                    <input
                      className="rounded-full"
                      type="checkbox"
                      name="termCheckbox"
                      id="termCheckbox"
                      defaultChecked
                    />
                    <label
                      htmlFor="termCheckbox"
                      className="text-gray-500 text-xs"
                    >
                      Please Read The Terms & Conditions
                    </label>
                  </div>
                  {loading ? (
                    <button className="btn w-full mb-6 flex justify-center items-center gap-5">
                      <span>Sending... </span>{" "}
                      <span className="animate-spin w-5 h-5 border rounded-full">
                        ..
                      </span>
                    </button>
                  ) : (
                    <button type="submit" className="btn w-full mb-6">
                      SIGNUP
                    </button>
                  )}

                  <p className="text-gray-500 text-xs">
                    Already Have an Account?{" "}
                    <Link href={"/login"} className="text-prim">
                      Login Now
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
