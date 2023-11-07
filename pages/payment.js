import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import BackToProductButton from "@/components/BackToProductButton";
import { useCartContext } from "@/context/Store";
import PaymentTable from "@/components/PaymentTable";

function PayementForm() {
  const pageTitle = `Payment`;
  const [cart, checkoutUrl] = useCartContext();

  return (
    <div className="container mx-auto mb-20 min-h-50">
      <SEO pageTitle={pageTitle} />
      <PageTitle text="Payment" />
      <PaymentTable cart={cart} />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        {/* <CheckOutButton showText={"Proceed To Payment"} webUrl={""} /> */}
        <BackToProductButton
          text={"Back To Previous Page"}
          url="/paymentform"
        />
      </div>
    </div>
  );
}

export default PayementForm;
