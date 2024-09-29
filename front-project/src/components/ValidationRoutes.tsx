import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../hooks"

interface ValidationRoutesProps {
    redirectTo: string
    validation: (status: string) => boolean
}

export const ValidationRoutes = ({ redirectTo, validation }: ValidationRoutesProps) => {

    const state = useAppSelector(state => state.auth.status)

    if (validation(state)) {
        return <Outlet />
    }

    return <Navigate to={redirectTo} />
}
