import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./views/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/login' />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);


export default router;