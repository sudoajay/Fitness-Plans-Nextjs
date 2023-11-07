import StoreHeading from "@/components/StoreHeading";
import ProductListings from "@/components/ProductListings";

import { getAllProductsFromJson } from "@/context/Data";
import { LoadMoreAnimation } from "@/components/LoadMore";

function IndexPage({ products }) {
  return (
    <div className="mx-auto max-w-5xl">
      <StoreHeading />
      <ProductListings products={products} />
      <LoadMoreAnimation />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProductsFromJson();

  return {
    props: { products },
  };
}

export default IndexPage;
