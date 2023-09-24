import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import BackToProductButton from '@/components/BackToProductButton'
import { useCartContext } from '@/context/Store'
import PaymentTable from '@/components/PaymentTable'
import {PrivacyPolicyTable} from '@/components/PrivacyPolicyTable'


function TermsForm() {
    const pageTitle = `Privacy Policy | ${process.env.siteTitle}`  
    const [cart, checkoutUrl] = useCartContext()

    return (
      <div className="container mx-auto mb-20 min-h-50">
        <SEO title={pageTitle} />
        <PageTitle text="Privacy Policy" />
        <PrivacyPolicyTable/>
        <div className="max-w-sm mx-auto space-y-4 px-2">
          <BackToProductButton   />
        </div>
  
      </div>
    )
  }

export default TermsForm