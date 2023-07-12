import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { AppError } from './app-error';
import { AppLayout } from './app-layout';

import { route as homeRoute } from './pages/home/route';
import { route as testRoute } from './pages/test/route';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            homeRoute,
            testRoute,
        ],
        errorElement: <AppError />
    }
], {});

export { router };
