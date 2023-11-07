/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  // output: "export",

  env: {
    siteTitle: "Regime Fit",
    siteDescription: "Get Workout Plans!",
    siteKeywords:
      "Workout Plan, Transform your life, strength,wellness,self-improvement",
    siteUrl: "https://fitness-plans.regimefit.com",
    siteImagePreviewUrl: "/images/main.jpg",
    productTitle: "Regime_Fit_Product",
    paymentForm: "Regime_Fit_Form",
    promoCode: "Promo_code",
    GOOGLE_ANALYTICS: "G-X5VCJV58T5",
    INR_TO_DOLLOR: "83",
  },
};

module.exports = nextConfig;
// next.js config
