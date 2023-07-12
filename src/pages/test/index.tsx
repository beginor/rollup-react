import { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import { Link, useRoutes, Outlet } from 'react-router-dom';

import { routes } from './pages/routes';

export function HomePage(): JSX.Element {

    const router = useRoutes(routes);

    return (
      <div>
        <p>Test HomePage works!!!</p>
        <Link to='test1'>Test1</Link>
        <Link to='test2'>Test2</Link>
        <Link to='test3'>Test3</Link>
        <hr />
        <Outlet />
        {router}
      </div>
    );
}
