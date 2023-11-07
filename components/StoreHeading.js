import PageTitle from "@/components/PageTitle";
import { useState, useEffect, useContext } from "react";
import AppInformationContext from "@/context/App-Information-Context.js";

function StoreHeading() {
  const { appInformation, setAppInformation } = useContext(
    AppInformationContext
  );
  return (
    <div className="">
      <PageTitle text={appInformation.mainTitle} />

      <p className="max-w-xl text-center px-2 mx-auto text-base font-normal text-gray-600">
        {appInformation.mainDescription}
      </p>
    </div>
  );
}

export default StoreHeading;
