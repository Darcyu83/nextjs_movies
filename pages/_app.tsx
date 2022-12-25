import '../styles/globals.css';

import RootLayout from '../layout/RootLayout';
import ConfigContextProvider from '../context/ConfigContextProvider';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigContextProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ConfigContextProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
