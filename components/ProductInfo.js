import Price from '@/components/Price'
import React, { useEffect, useState } from "react";
import axios from "axios";
function ProductInfo({ title, description, price , rupess }) {

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
    <div className=" font-primary">
      <h1 className="leading-relaxed font-semibold text-3xl text-palette-primary py-2 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg">
        {description}
      </p>
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        <Price
          currency={state.countryName == "India" ? "INR " : "$"}
          num={state.countryName == "India" ? rupess : price}
          numSize="text-2xl"
        />
      </div>
    </div>
  )
}

export default ProductInfo
