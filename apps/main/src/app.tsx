import { ConfigProvider, App as AntdApp } from 'antd';

import { zhCN, theme } from './antd-locale';

import './app.css';

export default function App(props: AppProps): JSX.Element {
    return (
      <ConfigProvider locale={zhCN} theme={theme}>
        <div className='page-wrapper app'>
          <h1>Hello, react!</h1>
          <p>{props.message}</p>
        </div>
      </ConfigProvider>
    );
}

export interface AppProps {
    message?: string;
}
