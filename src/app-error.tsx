import { useRouteError } from 'react-router-dom';

export function AppError(): JSX.Element {

    const error = useRouteError() as any;
    console.error(error);

    return (
      <div className='container'>
        <div className='alert alert-error'>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    );
}
