import { sign, verify } from "jsonwebtoken"


const KEY = "wowcheaopwerwersdfg"
export const tokenGenarator = (data: string | {}) => {
    const token = sign(data, KEY, { expiresIn: "72h" })
    return token
}

export const exportToken = (data: string) => {
    const codes = verify(data, KEY)
    return codes
}