import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import BackToProductButton from "@/components/BackToProductButton";
import { useCartContext } from "@/context/Store";
import { CancellationRefundPolicyTable } from "@/components/CancellationRefundPolicyTable";

function TermsForm() {
  const pageTitle = `Return & Refund Policy`;
  const [cart, checkoutUrl] = useCartContext();

  return (
    <div className="container mx-auto mb-20 min-h-50">
      <SEO pageTitle={pageTitle} />
      <PageTitle text="Return & Refund Policy" />
      <CancellationRefundPolicyTable />
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <BackToProductButton />
      </div>
    </div>
  );
}

export default TermsForm;
