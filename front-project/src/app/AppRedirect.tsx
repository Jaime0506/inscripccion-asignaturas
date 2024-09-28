import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

export default function AppRedirect() {
    const status = useAppSelector(state => state.auth.status)

    if (status !== "authenticated") {
        return <Navigate to={'/'} />
    }
}