import '../styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '../layout/RootLayout';
import ConfigContextProvider from '../context/ConfigContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigContextProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ConfigContextProvider>
  );
}
