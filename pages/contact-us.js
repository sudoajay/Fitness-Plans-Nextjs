import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import ContactUsFormTable from '@/components/ContactUsFormTable'



function PayementForm() {
    const pageTitle = `Contact-Us | ${process.env.siteTitle}`  
  
    return (
      <div className="container mx-auto mb-20 min-h-50">
        <SEO title={pageTitle} />
        <PageTitle text="Contact Us Form" />
        <ContactUsFormTable />

  
      </div>
    )
  }

export default PayementForm