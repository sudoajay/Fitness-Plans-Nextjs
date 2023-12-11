import BackToProductButton from "@/components/BackToProductButton";
import { HelpSection } from "@/components/HelpSection";
import { fetchAllFAQData } from "@/context/Data";
import { useState, useEffect } from "react";

function FaqTable() {
  const [getFAQData, setFAQData] = useState([{}]);

  useEffect(() => {
    getStaticPaths();
  }, []);

  async function getStaticPaths() {
    const faqData = await fetchAllFAQData();
    setFAQData(faqData);
  }

  return (
    <div>
      <div class="mx-auto container flex items-center" id="nav">
        <div class="w-full pt-0 p-8">
          <div class="mx-auto md:p-6 md:w-full">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
              <HelpSection items={getFAQData} id={"faq"} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <BackToProductButton text={"Back To Previous Page"} url="GoBack" />
      </div>
    </div>
  );
}
export default FaqTable;
