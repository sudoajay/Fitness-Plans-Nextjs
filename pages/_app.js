import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const pageTitle = `FitnessPlans | ${process.env.siteTitle}`  

return (
    <Layout>
      <SEO 
        title={pageTitle}
      />
        <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
