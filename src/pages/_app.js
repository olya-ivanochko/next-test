import PropTypes from 'prop-types'
import { wrapper } from 'store/store'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
}

export default wrapper.withRedux(MyApp)
