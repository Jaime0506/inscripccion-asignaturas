import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../hooks"
import { AuthLayout } from "./AuthLayout"

interface ValidationRoutesProps {
    redirectTo: string
    validation: (status: string) => boolean
}

export const ValidationRoutes = ({ redirectTo, validation }: ValidationRoutesProps) => {

    const state = useAppSelector(state => state.auth.status)

    if (validation(state)) {
        // Si estoy donde deberia estar, cargo el contenido
        return (
            <AuthLayout>
                <Outlet />
            </AuthLayout>
        )
    }

    return <Navigate to={redirectTo} />
}
