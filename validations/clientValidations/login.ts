"use client"

import * as yup from "yup"

const loginValidations = yup.object({
    email: yup.string().email().min(5).max(50).required(),
    password: yup.string().min(5).max(50).required(),
})

export default loginValidations