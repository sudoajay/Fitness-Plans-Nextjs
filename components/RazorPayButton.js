import { useCallback, useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import axios from "axios";

import { createdTimeStamp } from "@/utils/helpers";
import { toast } from "react-toastify";
import Router from "next/router";

export function RazorPayButton({ data, subtotal, cart, promoCode }) {
  const Razorpay = useRazorpay();

  function showToast(
    text = "You Will Get Your Order Delivered To Your Email Within 12 Hours."
  ) {
    toast.success(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function showToastError(text = "Something went Wrong Contact Us") {
    toast.error(text, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handlePayment = useCallback(
    (getCart, getdata, getTotal, getPromoCode) => {
      const dollorToINR = 82.5;
      const realAmount = Math.round(getTotal * dollorToINR);
      const options = {
        key: "rzp_live_h7b5GOBIKB0m2O",
        keySecret: "dE72QEy6N8DPonLo7SZJnE8S",
        currency: "INR",
        amount: realAmount * 100,
        name: "Payment",
        description: "fitness Plans",
        image: "https://fitness-plans.regimefit.com/icon.svg",
        callback_url: "https://fitness-plans.regimefit.com",
        prefill: {
          name: getdata.fullName,
          email: getdata.email,
          contact: getdata.phoneNumber,
        },
        notes: {
          address: "fitness",
        },
        theme: {
          color: "#009688",
        },
        handler: (res) => {
          var items = "";
          cartItems.map((item) => {
            items +=
              (items.length == 0 ? "" : " , ") +
              item.productTitle +
              " - " +
              item.quantity;
          });
          items = "";
          var referralcode = "";
          cartItems.map((item) => {
            referralcode +=
              (items.length == 0 ||
              !item.referralcode ||
              item.referralcode.length === 0
                ? ""
                : " , ") +
              (!item.referralcode || item.referralcode.length === 0
                ? ""
                : item.productTitle + " - " + item.referralcode);
          });

          let sendData = {
            FullName: getdata.fullName,
            Age: getdata.age,
            Email: getdata.email,
            PhoneNumber: getdata.phoneNumber,
            Information: getdata.postalZipCode + " - " + getdata.country,
            Product: items,
            Amount: realAmount + " RS",
            PromoCode: getPromoCode,
            ReferralCode: referralcode,
            PaymentMethod: "RazorPay",
            PaymentID: res.razorpay_payment_id,
            OrderID: "",
            AccessToken: "",
          };

          postJsonDataPayment(sendData);

          // const API_PATH =
          //   "https://fitness-plans.regimefit.com/api/payment_database_connector.php";

          // axios
          //   .post(API_PATH, sendData)
          //   .then((result) => {
          //     if (result.data == "Inserted Successfully") {
          //       showToast();
          //       Router.push("/");
          //     } else {
          //       showToastError();
          //     }
          //   })
          //   .catch(function (error) {});
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    },
    [Razorpay]
  );

  async function postJsonDataPayment(data) {
    try {
      const response = await fetch(
        "https://fitness-plans.regimefit.com/api/payment",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          // mode: "no-cors", // no-cors, *cors, same-origin
          // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "include", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          // redirect: "follow", // manual, *follow, error
          // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Success:", result);
      if (result) {
        showToast();
        Router.push("/");
      } else {
        showToastError();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="App">
      <button
        type="button"
        class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
        onClick={() => handlePayment(cart, data, subtotal, promoCode)}
      >
        <img
          class="h-8 w-8 mr-1 object-contain"
          src="/images/asset/razorpay.svg"
          alt="dummy-image"
        />
        Pay with RazorPay
      </button>
    </div>
  );
}
