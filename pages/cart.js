import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import CartTable from '@/components/CartTable'

import { useCartContext } from '@/context/Store'

function CartPage() {
  const pageTitle = `Cart | ${process.env.siteTitle}`  
  const [cart, checkoutUrl] = useCartContext()

  return (
    <div className="container mx-auto mb-60 min-h-50">
      <SEO title={pageTitle} />
      <PageTitle text="Your Cart" />
      <CartTable 
        cart={cart}
      />
    

    </div>
  )
}

export default CartPage
