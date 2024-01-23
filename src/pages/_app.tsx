import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/layouts/navbar/Navbar';
import AppShell from '@/components/layouts/appshell';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
