import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom'

import App from '../App'
import Device from '../pages/DeviceAbout/Device';
import SchoolDevice from '../pages/DeviceAbout/SchoolDevice';
import SetDevice from '../pages/DeviceAbout/SetDevice';
import User from '../pages/UserAbout/User';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/home',
        element: <Navigate to="/" replace={true} />
    },
    {
        path: '/device',
        element: <Device />,
        children: [
            {
                path: 'school',
                element: <SchoolDevice />
            },
            {
                path: 'setDevice',
                element: <SetDevice />
            }
        ]
    },
    {
        path: '/user',
        element: <User />
    }
]

export default createBrowserRouter(routes)