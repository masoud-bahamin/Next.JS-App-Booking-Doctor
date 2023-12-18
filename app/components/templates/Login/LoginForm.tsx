"use client"


import BaseUrl from '@/utils/baseUrl'
import loginValidations from '@/validations/clientValidations/login'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function LoginForm() {

    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const signupUser = async ({ email, password }: { email: string, password: string }) => {
        setLoading(true)
        try {
            // const res = await fetch(`${BaseUrl}users/login`, {
            const res = await fetch(`http://localhost:3000/api/users/login`, {
                method: "POST",
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            console.log(data);
            if (data.resulte) {
                Swal.fire({
                    icon: "success",
                    text: "your signing was successfully"
                })
                router.push("/account")
            } else {
                Swal.fire({
                    icon: "error",
                    text: data.message
                })
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
        <div className='p-6 border rounded-md'>
            <h3 className='text-xl font-medium mb-6'>Doctor/Patient Login</h3>
            <Formik
                onSubmit={values => {
                    if (!loading) {
                        signupUser(values)
                    }
                }}
                initialValues={{ email: "", password: "" }}
                validationSchema={loginValidations}
            >
                {({ errors, touched }) => (
                    <Form className='xl:w-[500px]'>
                        {errors.email && touched.email ? <p className='py-2 text-rose-400 text-xs w-full'>{errors.email}</p> : null}
                        <Field name="email" className="p-3 mb-3 rounded-md text-xs border border-slate-10 outline-none w-full" placeholder={"email"} />
                        {errors.password && touched.password ? <p className='py-2 text-rose-400 text-xs w-full'>{errors.password}</p> : null}
                        <Field name="password" className="p-3 mb-3 rounded-md text-xs border border-slate-10 outline-none w-full" placeholder="password" />
                        <div className='flex items-center gap-3  p-4 mb-6'>
                            <input className='rounded-full'
                                type="checkbox" name="termCheckbox" id="termCheckbox" defaultChecked />
                            <label htmlFor="termCheckbox" className='text-gray-500 text-xs'>Remember Me</label>
                        </div>
                        {loading ? (<button className='btn w-full mb-6 flex justify-center items-center gap-5'><span>Sending... </span> <span className='animate-spin w-5 h-5 border rounded-full'>..</span></button>) : (
                            <button type='submit' className='btn w-full mb-6'>LOGIN</button>
                        )}

                        <p className='text-gray-500 text-xs'>Do not Have an Account? <Link href={"/signup"} className='text-prim'>Sign Up</Link></p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
