"use client"

import * as yup from "yup"

const signupValidations = yup.object({
    email: yup.string().email().min(5).max(50).required(),
    username: yup.string().min(3).max(50).required(),
    password: yup.string().min(5).max(50).required(),
    repassword: yup.string().oneOf([yup.ref("password")] , "Passwords must match"),
})

export default signupValidations