'use client';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/helpers/apollo';
import { Navbar, Footer, SliderTop } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Joggy',
  description: 'Joggy Shopify',
};

export default function RootLayout({ children }) {
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
        </body>
      </html>
    </ApolloProvider>
  );
}
