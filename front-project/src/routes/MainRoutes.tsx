import { RouteObject } from "react-router-dom"

import { authRoutes } from "../auth"
import { AppRoutes } from "../app"
import { RootRedirect } from "./RootRedirect"

export const MainRoutes: RouteObject[] = [
    {
        path: '/',
        element: <RootRedirect />,
    },
    authRoutes,
    AppRoutes

]