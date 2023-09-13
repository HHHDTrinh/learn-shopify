'use client';
import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/helpers/apollo';
import { Navbar, Footer, SliderTop } from '@/components';
import { CartsContext, LoadingContext } from '@/helpers/context';
import './globals.css';

export const metadata = {
  title: 'Joggy',
  description: 'Joggy Shopify',
};

export default function RootLayout({ children }) {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <ApolloProvider client={apolloClient}>
      <LoadingContext.Provider
        value={{
          loading: loading,
          show: () => setLoading(true),
          hide: () => setLoading(false),
        }}
      >
        <CartsContext.Provider
          value={{
            carts,
            setCarts,
          }}
        >
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
            </body>
          </html>
        </CartsContext.Provider>
      </LoadingContext.Provider>
    </ApolloProvider>
  );
}
