import { checking, login } from "../store/auth/authSlice"
import { UserType } from "../types/redux"
import { useAppDispatch } from "./useStore"

export const useAuth = () => {

    const dispatch = useAppDispatch()
    
    const onLogin = (user: UserType) => {
        dispatch(login(user))
    }

    const onLogout = () => {
        dispatch(checking())

        // setTimeout(() => {

        //     console.log("Emote")

        //     dispatch(logout())
        // }, 1500)
    }

    return {
        onLogin,
        onLogout
    }
}