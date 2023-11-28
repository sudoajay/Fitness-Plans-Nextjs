import { CartProvider } from "@/context/Store";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useContext, useEffect } from "react";

import AppInformationContext from "@/context/App-Information-Context.js";

function Layout({ children }) {
  const { appInformation, setAppInformation } = useContext(
    AppInformationContext
  );

  useEffect(() => {
    fetchAppInformation();
  }, []);

  async function fetchAppInformation() {
    try {
      const response = await fetch(
        "http://localhost:3002/api/get/app/information",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          // mode: "no-cors", // no-cors, *cors, same-origin
          // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "include", // include, *same-origin, omit

          // redirect: "follow", // manual, *follow, error
          // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
      );

      const result = await response.json();

      let newAppInfromation = {
        appTitle: result.AppTitle,
        appDescription: result.AppDescription,
        appKeywords: result.AppKeywords,
        mainTitle: result.MainTitle,
        mainDescription: result.MainDescription,
      };
      setAppInformation(newAppInfromation);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Nav />

        <main>{children}</main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default Layout;
