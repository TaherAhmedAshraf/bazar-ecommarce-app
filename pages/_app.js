import { Provider } from 'react-redux'
import store from '../redux/Store'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (<Provider store={store}><Component {...pageProps} /></Provider>)
}

export default MyApp
