import type {AppProps} from 'next/app'
import {globalStyles} from '../stitches.config'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  globalStyles()
  return <Component {...pageProps} />
}
export default MyApp
