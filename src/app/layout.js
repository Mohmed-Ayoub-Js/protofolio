import {  Cairo } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import Header from '@/components/home/Header/Header';
import Footer from '@/components/home/footer/Footer';
const Cario = Cairo({subsets:['arabic']});
export const metadata = {
  title: 'Mohammed Ayoub js',
  description: 'Mohammed ayoub js protofolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Cario.className} dark text-foreground bg-background `}>
       <Providers>
        <Header />
        {children}
        <Footer />
       </Providers>
        </body>
    </html>
  )
}
