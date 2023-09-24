import { useCallback, useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import axios from "axios";

import { createdTimeStamp } from "@/utils/helpers";
import { toast } from "react-toastify";
import Router from "next/router";


export function RazorPayButton({ data, subtotal, cart , promoCode }) {
  const Razorpay = useRazorpay();

  function showToast(text = "You Will Get Your Order Delivered To Your Email Within 12 Hours.") {
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
      const realAmount = Math.round((getTotal*dollorToINR))
      const options = {
        key: "rzp_live_h7b5GOBIKB0m2O",
        keySecret: "dE72QEy6N8DPonLo7SZJnE8S",
        currency: "INR",
        amount: (realAmount * 100),
        name: "Payment",
        description: "Canva Plans",
        image:
          "https://canva-plans.regimefit.com/icon.svg",
        callback_url: "https://canva-plans.regimefit.com",
        prefill: {
          name: getdata.fullName,
          email: getdata.email,
          contact: getdata.phoneNumber,
        },
        notes: {
          address: "Canva",
        },
        theme: {
          color: "#009688",
        },
        handler: (res) => {
      
          var items = "";
          getCart.map((item) => {
            items += (items.length == 0 ?"" : " , "+ item.productTitle + " - " + item.quantity );
          });


          var referralcode = "";
          cartItems.map((item) => {
            referralcode +=( items.length == 0 ?"" : " , "+ item.productTitle + " - " + item.referralcode );
          });

          let sendData = {
            FullName: getdata.fullName,
            Age: getdata.age,
            Email: getdata.email,
            PhoneNumber: getdata.phoneNumber,
            Information: getdata.postalZipCode + " - " + getdata.country,
            Created: createdTimeStamp(),
            Product: items,
            Amount: realAmount+" RS",
            PromoCode:getPromoCode,
            Referralcode:referralcode,
            PaymentMethod: "RazorPay",
            PaymentID: res.razorpay_payment_id,
            OrderID:"",
            AccessToken:""

          };

          const API_PATH =
            "https://canva-plans.regimefit.com/api/payment_database_connector.php";

          axios
            .post(API_PATH, sendData)
            .then((result) =>{
              if(result.data == "Inserted Successfully"){
                showToast()
                Router.push("/");
              }
              else{
                showToastError()
              }

            }
            )
            .catch(function (error) {
            });
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    },
    [Razorpay]
  );

  return (
    <div className="App">
      <button
        type="button"
        class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
        onClick={() => handlePayment(cart, data, subtotal, promoCode)}
      >
        <img
          class="h-8 w-8 mr-1 object-contain"
          src="/images/item/razorpay.svg"
          alt="dummy-image"
        />
        Pay with RazorPay
      </button>
    </div>
  );
}
