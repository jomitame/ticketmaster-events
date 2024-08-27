import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import Home from '../views/Home';
import Detail from '../views/Detail';
import Error404 from '../views/Error404';

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
        element: <Detail />
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