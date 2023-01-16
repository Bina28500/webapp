import { update } from "../services/userService"

export const updateBalance = async(id: number, minus: number) => {
    try{
    const result = await update(id, minus);
    return result;
    } catch(err) {
        throw new Error(`${err}`)
    }
}