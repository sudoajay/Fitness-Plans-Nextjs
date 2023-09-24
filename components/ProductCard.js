import Image from 'next/image'
import Link from 'next/link'
import Price from '@/components/Price'
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function ProductCard({ products }) {

 

  const handle = products.slug
  const title = products.title
  const description = products.description
  const price = products.price
  const rupess = products.rupess
  const imageNode = products.mainImage

    const [state, setState] = useState({
      countryName: "",
    });
  

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState({
          ...state,
          countryName: data.country_name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);





  return (
    <Link
      href={`/products/${handle}`}
      passHref legacyBehavior
    >
      <a className="h-140 w-64 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="h-96 border-b-2 border-palette-lighter relative">
          <Image
            src={`/images/item/${imageNode}`}
            alt={title}
            layout="responsive"
            width={250}
            height={380}
            className="transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="h-20 relative">
          <div className="font-primary text-palette-primary text-xl pt-4 px-4 font-bold">
            {title}
          </div>
          <div className="text-small text-gray-600 p-4 font-primary font-medium">
            {description}
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
            <Price
              currency={state.countryName == "India" ? "INR " : "$"}
              num={state.countryName == "India" ? rupess : price}
              numSize="text-lg"
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
