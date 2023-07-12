import { LikeButton } from './like-button';

import './app.css';

export default function App(props: AppProps): JSX.Element {
    return (
      <div className='page-wrapper app'>
        <h1>Hello, react!</h1>
        <p>{props.message}</p>
        <LikeButton />
      </div>
    );
}

export interface AppProps {
    message?: string;
}
