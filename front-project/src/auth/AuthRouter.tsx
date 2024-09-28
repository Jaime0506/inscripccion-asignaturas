import { Navigate, RouteObject } from "react-router-dom";
import AuthRedirect from "./AuthRedirect";

export const authRoutes: RouteObject = {
    path: 'auth',
    element: <AuthRedirect />,
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
