import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";


import Router from "next/router";

function CheckOutButton({
  showText,
  webUrl,
}) {

  function callLogout(){
    destroySession().then((res) => {
      if (res == true) {
        showToast("Succesfull Logout");
        Router.push(webUrl);
      }

    });
  }
 
  async function destroySession(){
    const dataSend = {
      username: "",
      password: "",
      callfunction : "DestroySession",
    };

    try {
      const Login_PATH =
        "https://fitness-plans.regimefit.com/api/login-database-connector.php";

      let res = await axios({
        url: Login_PATH,
        method: "post",
        timeout: 8000,
        data: dataSend,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        }
            });
      if (res.status == 200) {
        // test for status you want, etc
        console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
  

 
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

  function showToastError(text = "Cart is currently empty 🛒") {
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

  return (
    <Link
      href={
       ""
      }
      passHref
      legacyBehavior
    >
      <a
        onClick={() =>
          callLogout()
        }
        aria-label="checkout-products"
        className="bg-palette-red text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-redDark focus:outline-none w-full hover:bg-palette-redDark rounded-sm"
      >
        {showText}
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-4 ml-2 inline-flex" />
      </a>
    </Link>
  );
}

export default CheckOutButton;
