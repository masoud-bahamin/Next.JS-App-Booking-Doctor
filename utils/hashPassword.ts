import { hash, compare} from "bcryptjs"

export const hashPassword = async (pass: string) => {
    const hashPass = await hash(pass, 12)
    return hashPass
}

export const checkPassword = async (hash : string , pass:string) => {
    const check = compare(hash , pass);
    return check
}