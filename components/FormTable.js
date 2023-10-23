import CheckOutButton from "@/components/CheckOutButton";
import BackToProductButton from "@/components/BackToProductButton";
import { useState, useEffect } from "react";

import {
  getPaymentFormData,
  getCartSubTotal,
  getPromoCodeInLocalStorage,
  getCartDiscountSubTotal,
} from "@/utils/helpers";
import axios from "axios";
import Router from "next/router";

function FormTable({ cart }) {
  const [getFullname, setFullName] = useState("");
  const [getAge, setAge] = useState();
  const [getEmail, setEmail] = useState("");
  const [getPhoneNumber, setPhoneNumber] = useState("");
  const [getPostalZipCode, setPostalZipCode] = useState("");
  const [getCountry, setCountry] = useState("");

  const [getData, setData] = useState({});

  const [getNewData, setNewData] = useState({});

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [getPromoCode, setPromoCode] = useState("");

  useEffect(() => {
    setNewData(newData);
  }, [getFullname]);
  useEffect(() => {
    setNewData(newData);
  }, [getAge]);
  useEffect(() => {
    setNewData(newData);
  }, [getEmail]);
  useEffect(() => {
    setNewData(newData);
  }, [getPhoneNumber]);
  useEffect(() => {
    setNewData(newData);
  }, [getPostalZipCode]);
  useEffect(() => {
    setNewData(newData);
  }, [getCountry]);

  useEffect(() => {
    const promoCode = getPromoCodeInLocalStorage();
    if (promoCode == null) Router.push("/cart");
    else setPromoCode(promoCode.PromoCode);
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

  useEffect(() => {
    const data = getPaymentFormData();
    if (data) {
      setData(data);
      setNewData(data);
      setFullName(data.fullName);
      setAge(data.age);
      setEmail(data.email);
      setPhoneNumber(data.phoneNumber);
      setPostalZipCode(data.postalZipCode);
      setCountry(data.country);
    }
  }, []);

  const newData = {
    fullName: getFullname,
    age: getAge,
    email: getEmail,
    phoneNumber: getPhoneNumber,
    postalZipCode: getPostalZipCode,
    country: getCountry,
  };

  return (
    <div>
      <div class="mx-auto container flex items-center" id="nav">
        <div class="w-full pt-0 p-8">
          <div class="mx-auto md:p-6 md:w-1/2">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
              <form method="POST" action="">
                <div class="mb-4">
                  <label
                    for="fullName"
                    class=" font-primary font-medium block text-gray-700 text-sm mb-2"
                  >
                    Full Name
                    <span class="text-red-500">&nbsp;*</span>
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="Richard Smith"
                      value={getFullname}
                      onChange={(evt) => {
                        setFullName(evt.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="age"
                    class="  font-primary font-medium  block text-gray-700 text-sm mb-2"
                  >
                    Age
                    <span class="text-red-500">&nbsp;*</span>
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"></div>
                    <input
                      type="number"
                      id="age"
                      class="block pr-3 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="21"
                      value={getAge}
                      onChange={(evt) => {
                        setAge(evt.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="email"
                    class="font-primary font-medium block text-gray-700 text-sm mb-2"
                  >
                    Email
                    <span class="text-red-500">&nbsp;*</span>
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="richardsmith@xyz.com"
                      value={getEmail}
                      onChange={(evt) => {
                        setEmail(evt.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="phoneNumber"
                    class=" font-primary font-medium block text-gray-700 text-sm  mb-2"
                  >
                    Phone Number
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="(000) 000-0000"
                      value={getPhoneNumber}
                      onChange={(evt) => {
                        setPhoneNumber(evt.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-4">
                  <div class="mb-0">
                    <label
                      for="postalZipCode"
                      class=" font-primary font-medium  block text-gray-700 text-sm mb-2"
                    >
                      Postal/Zip Code
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          class="h-5 w-5 text-gray-400"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="postalZipCode"
                        class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                        placeholder="90001"
                        value={getPostalZipCode}
                        onChange={(evt) => {
                          setPostalZipCode(evt.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div class="mb-0">
                    <label
                      for="country"
                      class=" font-primary font-medium block text-gray-700 text-sm mb-2"
                    >
                      Country
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                          class="h-5 w-5 text-gray-400"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="country"
                        class="block pr-10 shadow appearance-none border-2 border-palette-light rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                        placeholder="United States"
                        value={getCountry}
                        onChange={(evt) => {
                          setCountry(evt.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto space-y-4 px-2">
        <CheckOutButton
          getNewData={getNewData}
          showText={"Proceed To Payment"}
          webUrl={"/payment"}
          subtotal={subtotal}
          cart={cartItems}
          promoCode={getPromoCode}
        />
        <BackToProductButton text={"Back To Previous Page"} url="/cart" />
      </div>
    </div>
  );
}
export default FormTable;
