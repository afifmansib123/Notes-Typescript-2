import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import '../fontawesome'; // Import your fontawesome.js file

config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically
import { Stateprovider } from '@/utils/Store';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Stateprovider>
  <Component {...pageProps} />
  </Stateprovider>
  )
}
