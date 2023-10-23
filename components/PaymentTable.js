import { useState, useEffect } from "react";

import Price from "@/components/Price";
import { getCartSubTotal } from "@/utils/helpers";
import {
  getPaymentFormData,
  getPromoCodeInLocalStorage,
  getCartDiscountSubTotal,
} from "@/utils/helpers";

import { PayPalPayButton } from "@/components/PayPalButton";

import { RazorPayButton } from "@/components/RazorPayButton";
import axios from "axios";
import Router from "next/router";

function PaymentTable({ cart }) {
  const [cartItems, setCartItems] = useState([]);

  const [subtotal, setSubtotal] = useState(0);
  const [getData, setData] = useState({});
  const [getPromoCode, setPromoCode] = useState("");

  useEffect(() => {
    const promoCode = getPromoCodeInLocalStorage();
    if (promoCode == null) Router.push("/cart");
    else {
      setPromoCode(promoCode.PromoCode);

      const data = getPaymentFormData();
      if (data == null) Router.push("/paymentform");
      else setData(data);
    }
  }, []);

  useEffect(() => {
    const objectLength = (obj) => Object.entries(obj).length;
    if (objectLength(cart) == 0) Router.push("/cart");
    setCartItems(cart);
    if (getPromoCode != "") checkIfPromoCodeMatch(getPromoCode);
    else setSubtotal(getCartSubTotal(cart));
  }, [cart, getPromoCode]);

  async function checkIfPromoCodeMatch(promoCode) {
    try {
      const response = await fetch(
        "https://fitness-plans.regimefit.com/api/promocode/" + promoCode,
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
      let newSubTotal;

      newSubTotal = getCartDiscountSubTotal(
        getCartSubTotal(cart),
        !result.PercentOff ? "0" : result.PercentOff
      );

      setSubtotal(newSubTotal);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div class="mx-auto container flex items-center" id="nav">
      <div class="w-full pt-0 p-8">
        <div class="mx-auto md:p-6 md:w-1/2">
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
            <form method="POST" action="#login">
              <div class="grid md:grid-cols-3 md:gap-4">
                <div class="mb-4">
                  <label
                    for="fullName"
                    class=" block text-gray-700 text-lg font-primary font-semibold  mb-2"
                  >
                    Subtotal:
                  </label>
                </div>

                <div class="font-primary text-lg text-palette-primary font-semibold mb-4 ">
                  <Price currency="$" num={subtotal} numSize="text-xl" />
                </div>
              </div>
              <div class="mb-4">
                <label
                  for="fullName"
                  class="block text-gray-700 text-lg  font-primary font-semibold  mb-2"
                >
                  Choose Payment Method:
                </label>
              </div>

              <div class="flex flex-col items-center  mt-10">
                <RazorPayButton
                  data={getData}
                  subtotal={subtotal}
                  cart={cartItems}
                  promoCode={getPromoCode}
                />
                {/* <h2 class=" font-primary font-medium text-xs text-red-500">
                  For International Users Only <sup class="star">*</sup><sup class="star">*</sup>
                </h2> */}
              </div>

              <h2 class=" font-primary font-medium text-lg flex flex-col items-center mb-5 mt-3">
                Or
              </h2>

              <div class="flex flex-col items-center">
                <PayPalPayButton
                  data={getData}
                  subtotal={subtotal}
                  cart={cartItems}
                  promoCode={getPromoCode}
                />
                <h2 class=" font-primary font-semibold text-xs text-red-500">
                  For International Users Only <sup class="star">*</sup>
                  <sup class="star">*</sup>
                </h2>
                {/* <h2 class=" font-primary font-medium text-xs text-red-500">
                  For India Users Only <sup class="star">*</sup><sup class="star">*</sup>
                </h2> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentTable;
