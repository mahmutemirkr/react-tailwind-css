import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    LoginPage,
    RegisterPage,


} from "../pages";
import { AuthLayout } from "../layouts";

const router = createBrowserRouter([
           
    // AUTH ROUTES
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ],
    },
   
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
