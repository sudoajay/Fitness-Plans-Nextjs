import Head from "next/head";
import Script from "next/script";
import { useEffect, useContext } from "react";
import AppInformationContext from "@/context/App-Information-Context.js";

function SEO({ pageTitle }) {
  // customize meta properties
  // you can pass them as an argument like title in case you want to change for each page
  const { appInformation, setAppInformation } = useContext(
    AppInformationContext
  );

  const description = appInformation.appDescription;
  const keywords = appInformation.appKeywords;
  const siteURL = process.env.siteUrl;
  const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`;
  const title = `${pageTitle} | ${appInformation.appTitle}`;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Open Graph */}
        <meta property="og:url" content={siteURL} key="ogurl" />
        <meta property="og:image" content={imagePreview} key="ogimage" />
        <meta property="og:site_name" content={siteURL} key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{title}</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
          purpose="any maskable"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
          purpose="any maskable"
        />
        <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>
        <meta name="theme-color" content="#EF4444" />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
}

export default SEO;
