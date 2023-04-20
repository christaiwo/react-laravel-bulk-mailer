import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import DefaultLayout from "./layouts/DefaultLayout";
import SendMail from "./views/SendMail";
import Mails from "./views/Mails";
import ViewMail from "./views/ViewMail";

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
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/send-mail',
                element: <SendMail />
            },
            {
                path: '/mails',
                element: <Mails />
            },
            {
                path: '/view-mail/:id',
                element: <ViewMail />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);


export default router;