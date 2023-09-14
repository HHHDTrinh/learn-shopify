'use client';
import { useEffect } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/helpers/apollo';
import { Navbar, Footer, SliderTop } from '@/components';
import { usePathname } from 'next/navigation';
import './globals.css';

const metadata = {
  title: 'Joggy',
  description: 'Joggy Shopify',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ApolloProvider client={apolloClient}>
      <html lang='en'>
        <head>
          <title>{metadata.title}</title>
          <meta name='description' content={metadata.description} />
        </head>
        <body>
          <SliderTop />
          <main className='relative flex min-h-[100vh] flex-col overflow-x-hidden'>
            <Navbar />
            {children}
            <Footer />
          </main>
          <ProgressBar
            height='4px'
            color='#0a8c03'
            options={{ showSpinner: false }}
            shallowRouting
          />
        </body>
      </html>
    </ApolloProvider>
  );
}
