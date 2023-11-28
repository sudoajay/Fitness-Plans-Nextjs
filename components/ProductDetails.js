import BackToProductButton from "@/components/BackToProductButton";
import ProductInfo from "@/components/ProductInfo";
import ProductForm from "@/components/ProductForm";
import Link from "next/link";
import { useState } from "react";

function ProductDetails({ products }) {
  const [price, setPrice] = useState(products.price);
  const [rupess, setRupess] = useState(products.rupess);
  const itemId = products.id;

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <ProductInfo
        title={products.title}
        description={products.description}
        price={price}
        rupess={rupess}
      />
      <ProductForm
        title={products.title}
        handle={products.slug}
        price={price}
        mainImg={itemId + "/" + products.mainImage}
      />
      <BackToProductButton />

      <p className="max-w-xl text-center pt-5 mx-auto  font-semibold text-base font-primary text-gray-500">
        Visit the
        <span>
          <Link href={"/faq"} passHref legacyBehavior>
            <a className=" text-center px-1 pt-5 font-semibold text-base font-primary text-palette-primary">
              FAQs
            </a>
          </Link>
        </span>
        page for more info.
      </p>
    </div>
  );
}

export default ProductDetails;
