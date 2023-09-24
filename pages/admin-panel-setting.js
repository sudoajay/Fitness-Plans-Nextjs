import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import AdminPanelPageSetting from '@/components/AdminPanelPageSetting'


function PayementForm() {
    const pageTitle = `Admin-Panel-Setting | ${process.env.siteTitle}`  

    
  
    return (
      <div className="container mx-auto mb-20 min-h-50">
        <SEO title={pageTitle} />
        <PageTitle text="Admin Panel Setting" />
        <AdminPanelPageSetting/>

  
      </div>
    )
  }

export default PayementForm