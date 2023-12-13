import * as yup from "yup"

const updateScema = yup.object({
    location: yup.string().min(3).max(50).required(),
    age: yup.number().min(3).max(50).required(),
    bio: yup.string().min(3).max(50).required(),
    name: yup.string().min(3).max(50).required(),
    phone: yup.string().min(9).max(12).required()
})

export default updateScema