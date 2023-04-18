import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Register from "./views/Register";

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
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);


export default router;