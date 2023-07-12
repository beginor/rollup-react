import { RouteObject } from 'react-router-dom';

export const route: RouteObject = {
    path: 'home',
    lazy: async () => {
        const { HomePage } = await import('./index');
        return {
            element: <HomePage />
        };
    }
};
