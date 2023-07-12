import { Suspense, lazy } from 'react';

import { RouteObject } from 'react-router-dom';

const Test1 = lazy(() => import('./test1'));
const Test2 = lazy(() => import('./test2'));
const Test3 = lazy(() => import('./test3'));

export const routes: RouteObject[] = [
    {
        path: 'test1',
        element: (
          <Suspense fallback={'loading'}>
            <Test1 />
          </Suspense>
        ),
    },
    {
        path: 'test2',
        element: (
          <Suspense fallback={'loading'}>
            <Test2 />
          </Suspense>
        ),
    },
    {
        path: 'test3',
        element: (
          <Suspense fallback={'loading'}>
            <Test3 />
          </Suspense>
        ),
    }
];
