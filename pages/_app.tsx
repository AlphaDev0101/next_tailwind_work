import 'styles/globals.scss'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Head>
        <title>Turkey Mint - Foster</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default MyApp
