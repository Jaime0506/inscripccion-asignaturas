import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

export default function AuthRedirect() {
    const status = useAppSelector(state => state.auth.status)

    if (status !== "not-authenticated") {
        return <Navigate to={'/'} />
    }
}
