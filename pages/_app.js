import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AppInformationContext from "@/context/App-Information-Context";

function MyApp({ Component, pageProps }) {
  const initialValue = {
    appTitle: "",
    appDescription: "",
    appKeywords: "",
    mainTitle: "",
    mainDescription: "",
  };

  const pageTitle = `FitnessPlans`;
  const [appInformation, setAppInformation] = useState(initialValue);
  const value = { appInformation, setAppInformation };

  return (
    <AppInformationContext.Provider value={value}>
      <Layout>
        <SEO pageTitle={pageTitle} />

        <ToastContainer />

        <Component {...pageProps} />
      </Layout>
    </AppInformationContext.Provider>
  );
}

export default MyApp;
