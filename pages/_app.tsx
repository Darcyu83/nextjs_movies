import '../styles/globals.css';

import RootLayout from '../layout/RootLayout';
import ConfigContextProvider from '../context/ConfigContextProvider';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigContextProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ConfigContextProvider>
  );
}
