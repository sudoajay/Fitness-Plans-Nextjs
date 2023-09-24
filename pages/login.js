import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import LoginFormTable from '@/components/LoginFormTable'


function PayementForm() {
    const pageTitle = `Login-Form | ${process.env.siteTitle}`  
  
    return (
      <div className="container mx-auto mb-20 min-h-50">
        <SEO title={pageTitle} />
        <PageTitle text="Login Form" />
        <LoginFormTable/>

  
      </div>
    )
  }

export default PayementForm