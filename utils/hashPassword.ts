import { hash, compare} from "bcryptjs"

export const hashPassword = async (pass: string) => {
    const hashKey = process.env.HASH_KEY || 12;
    const hashPass = await hash(pass, hashKey)
    return hashPass
}

export const checkPassword = async (hash : string , pass:string) => {
    const check = compare(hash , pass);
    return check
}