import { useEffect,useState } from "react";

import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import FaqTable from "@/components/FaqTable";

function FaqPage() {


  const pageTitle = `FAQ | ${process.env.siteTitle}`;


  return (
    <div className="container mx-auto mb-20 min-h-50">
      <SEO title={pageTitle} />
      <PageTitle text="Frequently Asked Questions" />
      <FaqTable />
    </div>
  );
}

export default FaqPage;
