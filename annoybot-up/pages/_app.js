import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
import Head from 'next/head';

config.autoAddCss = false; 

const roboto = Roboto({
  weight: ['300', '500'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Head>
        
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
