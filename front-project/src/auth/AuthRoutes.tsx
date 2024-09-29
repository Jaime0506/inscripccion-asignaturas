import { Navigate, RouteObject } from "react-router-dom";
import { ValidationRoutes } from "../components/ValidationRoutes";

const validation = (status: string):boolean => {
    if (status === "not-authenticated") {
        return true
    }

    return false
}

export const AuthRoutes: RouteObject = {
    path: 'auth',
    element: <ValidationRoutes redirectTo="/" validation={validation} />,
    children: [
        {
            path: '',
            element: <Navigate to={'login'} />
        },
        {
            path: 'login',
            element: <>Login</>
        },
        {
            path: 'register',
            element: <>Register</>
        }
    ]
}