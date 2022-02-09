import '../styles/globals.css'

//it has to have in global scope the css created
import './css/integration.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
