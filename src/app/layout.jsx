import { Navbar, Footer, SliderTop } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Joggy',
  description: 'Joggy Shopify',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <SliderTop />
        <main className='relative'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
