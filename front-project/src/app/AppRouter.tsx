import { Navigate, RouteObject } from "react-router-dom";
import AppRedirect from "./AppRedirect";

export const AppRoutes: RouteObject = {
    path: 'app',
    element: <AppRedirect />,
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