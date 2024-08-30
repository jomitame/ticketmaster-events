import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Suspense } from "react";

import Home from '../views/Home';
import Detail from '../views/Detail';
import Error404 from '../views/Error404';
import ErrorBoundary from "../components/ErrorBoundary";

import Profile from '../views/Profile';
import LinkedEvents from '../views/Profile/components/LikedEvents';
import MyInfo from '../views/Profile/components/MyInfo';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/detail/:eventId',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary fallback={<div>Some error happens while trying to get detail of event...</div>}>
                    <Detail />
                </ErrorBoundary>
            </Suspense>
        )
    },
    {
        path: '/profile',
        element: <Profile />,
        children: [
            {
               path: 'my-info',
               element: <MyInfo /> 
            },
            {
                path: 'liked-events',
                element: <LinkedEvents /> 
             },
        ]
    }
]);

const MyRoutes = () => <RouterProvider router={router} />


export default MyRoutes;