import { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export function AppLayout(): JSX.Element {
    return (
      <div className='d-flex flex-grow-1 flex-column'>
        <Outlet />
      </div>
    );
}
