import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import LoginFormTable from "@/components/LoginFormTable";

function PayementForm() {
  const pageTitle = `Login-Form`;

  return (
    <div className="container mx-auto mb-20 min-h-50">
      <SEO pageTitle={pageTitle} />
      <PageTitle text="Login Form" />
      <LoginFormTable />
    </div>
  );
}

export default PayementForm;
