import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { AppError } from './app-error';
import { AppLayout } from './app-layout';

import { HomePage } from './pages/home/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'test',
                lazy: (): Promise<RouteObject> => {
                    return import('./pages/test/test').then (m => m.default);
                }
            }
        ],
        errorElement: <AppError />
    }
], {});

export { router };
