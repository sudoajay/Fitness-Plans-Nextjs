import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import AdminPanelPage from "@/components/AdminPanelPage";

function PayementForm() {
  const pageTitle = `Admin-Panel`;

  return (
    <div className="container mx-auto mb-20 min-h-50">
      <SEO pageTitle={pageTitle} />
      <PageTitle text="Admin Panel" />
      <AdminPanelPage />
    </div>
  );
}

export default PayementForm;
