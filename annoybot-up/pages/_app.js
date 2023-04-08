import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 

const roboto = Roboto({
  weight: ['300', '500'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
