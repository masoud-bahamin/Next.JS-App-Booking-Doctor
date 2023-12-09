"use client"

import BaseUrl from '@/utils/baseUrl'
import signupValidations from '@/validations/clientValidations/signin'
import { Field, Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Breadcrumb from '../components/modules/Breadcrumb/Breadcrumb'

export default function Signup() {

  const [loading, setLoading] = useState<boolean>(false)
  const [role, setRole] = useState("USER")
  const router = useRouter()

  const signupUser = async ({ email, username, password }: { email: string, username: string, password: string }) => {
    setLoading(true)
    try {
      const res = await fetch(`${BaseUrl}/users/create`, {
        method: "POST",
        body: JSON.stringify({ email, username, password , role})
      })
      const data = await res.json()
      console.log(data);
      if (data.resulte) {
        document.cookie = `bookingToken=${data.user._id}; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/` ;
        Swal.fire({
          icon: "success",
          text: "your signing was successfully"
        })
        router.push("/account")
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "your signing was NOT successfully"
      })
      router.refresh()
    }

    setLoading(false)

  }

  return (
    <div className=''>
      <Breadcrumb route='SignUp' title='Sign Up' />
      <div className='max-w-5xl mx-auto flex items-center gap-5'>
        <div>
          <Image
            width={600}
            height={10}
            src="/img/login-banner.png" alt="" />
        </div>
        <div>
          <div className='p-6 border rounded-md'>
            <h3 className='text-xl font-medium mb-6'>Doctor/Patient Register</h3>
            <Formik
              onSubmit={values => {
                if (!loading) {
                  signupUser(values)
                }
              }}
              initialValues={{ email: "", username: "", password: "", repassword: "" }}
              validationSchema={signupValidations}
            >
              {({ errors, touched }) => (
                <Form className='xl:w-[500px]'>
                  {errors.email && touched.email ? <p className='py-2 text-rose-400 text-xs w-full'>{errors.email}</p> : null}
                  <Field name="email" className="p-3 mb-3 rounded-md text-xs border border-slate-10 outline-none w-full" placeholder={"email"} />
                  {errors.username && touched.username ? <p className='py-2 text-rose-400 text-xs w-full'>{errors.username}</p> : null}
                  <Field name="username" className="p-3 mb-3 rounded-md text-xs border border-slate-10 outline-none w-full" placeholder="username" />
                  {errors.password && touched.password ? <p className='py-2 text-rose-400 text-xs w-full'>{errors.password}</p> : null}
                  <Field name="password" className="p-3 mb-3 rounded-md text-xs border border-slate-10 outline-none w-full" placeholder="password" />
                  {errors.repassword && touched.repassword ? <p className='py-2 text-rose-400 text-xs w-full'>{errors.repassword}</p> : null}
                  <Field name="repassword" className="p-3 mb-5 rounded-md text-xs border border-slate-10 outline-none w-full" placeholder="retype password" />
                  <h3 className='text-lg font-medium mb-3'>Start as :</h3>
                  <div className='flex border rounded-md'>
                    <div className='flex items-center gap-3 w-1/2 border-r p-4'>
                      <input className='rounded-full' onChange={() => setRole("USER")}
                        type="radio" name="roleCheckbox" id="patientCheckbox" defaultChecked />
                      <label htmlFor="patientCheckbox" className='text-gray-500 text-sm'>Patient</label>
                    </div>
                    <div className='flex items-center gap-3 w-1/2 p-4'>
                      <input className='rounded-full' onChange={() => setRole("DOCTOR")}
                        type="radio" name="roleCheckbox" id="doctorCheckbox"  />
                      <label htmlFor="doctorCheckbox" className='text-gray-500 text-sm'>Doctor</label>
                    </div>
                  </div>
                  <div className='flex items-center gap-3  p-4 mb-6'>
                    <input className='rounded-full'
                      type="checkbox" name="termCheckbox" id="termCheckbox" defaultChecked />
                    <label htmlFor="termCheckbox" className='text-gray-500 text-xs'>Please Read The Terms & Conditions</label>
                  </div>
                  {loading ? (<button className='btn w-full mb-6 flex justify-center items-center gap-5'><span>Sending... </span> <span className='animate-spin w-5 h-5 border rounded-full'>..</span></button>) : (
                    <button type='submit' className='btn w-full mb-6'>SIGNUP</button>
                  )}

                  <p className='text-gray-500 text-xs'>Already Have an Account? <Link href={"/login"} className='text-prim'>Login Now</Link></p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
