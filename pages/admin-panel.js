import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import AdminPanelPage from '@/components/AdminPanelPage'


function PayementForm() {
    const pageTitle = `Admin-Panel | ${process.env.siteTitle}`  

    
  
    return (
      <div className="container mx-auto mb-20 min-h-50">
        <SEO title={pageTitle} />
        <PageTitle text="Admin Panel" />
        <AdminPanelPage/>

  
      </div>
    )
  }

export default PayementForm