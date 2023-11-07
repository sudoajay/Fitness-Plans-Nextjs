import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import FormTable from "@/components/FormTable";
import { useCartContext } from "@/context/Store";

function PayementForm() {
  const pageTitle = `PaymentForm`;
  const [cart, checkoutUrl] = useCartContext();

  return (
    <div className="container mx-auto mb-20 min-h-50">
      <SEO pageTitle={pageTitle} />
      <PageTitle text="Payment Form" />
      <FormTable cart={cart} />
    </div>
  );
}

export default PayementForm;
