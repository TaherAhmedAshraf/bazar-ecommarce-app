import { Provider } from 'react-redux'
import store from '../redux/Store'
import 'tailwindcss/tailwind.css'
import Router from 'next/router'
import ProgressBar from "@badrap/bar-of-progress"

const progress = new ProgressBar({
  size: 4,
  color: "#fe595e",
  className: "z-50",
  delay: "100"
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return (<Provider store={store}><Component {...pageProps} /></Provider>)
}

export default MyApp
