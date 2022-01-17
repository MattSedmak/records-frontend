import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProgressBar } from '@components/progess-bar';
import { AnimatePresence } from 'framer-motion';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  // add custom route change animation
  useEffect(() => {
    const handleStart = () => setIsAnimating(true);
    const handleStop = () => setIsAnimating(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <ProgressBar isAnimating={isAnimating} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default MyApp;
