import { Navigate, RouteObject } from "react-router-dom";
import { ValidationRoutes } from "../components/ValidationRoutes";

const validation = (status: string):boolean => {
    if (status === "authenticated") return true

    return false
}

export const AppRoutes: RouteObject = {
    path: 'app',
    element: <ValidationRoutes redirectTo="/" validation={validation} />,
    children: [
        {
            path: '',
            element: <Navigate to={'home'} />
        },
        {
            path: 'home',
            element: <>Inicio app</>
        }
    ]
}