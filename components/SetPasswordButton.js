import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Router from "next/router";


function CheckOutButton({
  currentPassword,
  newPassword,
  confirmPassword,
  showText = "Set Password",
  webUrl = "/login",
}) {

  const checkCurrentPassword = () => {
    return currentPassword === undefined || currentPassword.length == 0;
  };

  const checkNewPassword = () => {
    return newPassword === undefined || newPassword.length == 0;
  };

  const checkNewCurrentPasswordMatch = () => {
    return currentPassword == newPassword;
  };
  const checkConfirmPassword = () => {
    return confirmPassword === undefined || confirmPassword.length == 0;
  };

  const checkPasswordMatch = () => {
    return newPassword != confirmPassword;
  };

  function checkEverythingIsCorrect() {
    if (checkCurrentPassword()) {
      showToastError(" 🔑 Current Password Is Required");
    } else if (checkNewPassword()) {
      showToastError(" 🔑 New Password Is Required");
    } else if (checkNewCurrentPasswordMatch()) {
      showToastError(" 🔑 Current Password And New Passwords Match");
    } else if (checkConfirmPassword()) {
      showToastError(" 🔑 Confirm Password Is Required");
    } else if (checkPasswordMatch()) {
      console.log(" " + newPassword + " -- " + confirmPassword);
      showToastError(" 🔑 New Password And Confirm Password Do Not Match ");
    } else {
      checkIfCurrentPasswordMatch().then((res) => {
        if (res == "NotMatch") {
          showToastError(" 🔑 Current password is incorrect.");
        } else if (res == "Inserted Successfully") {
          showToast(" 🔑 Password successfully updated.");
          Router.push("/login");

        } else {
          showToastError(" 🔑 Oops, something's not right. Contact us");
        }
      });
    }
  }

  async function checkIfCurrentPasswordMatch() {
    const dataSend = {
      CurrentPassword: currentPassword,
      NewPassWord: newPassword,
      callfunction: "isPasswordMatchThenChangePassword",
    };
    try {
      const Login_PATH =
        "https://fitness-plans.regimefit.com/api/login-database-connector.php";

      let res = await axios({
        url: Login_PATH,
        method: "post",
        timeout: 8000,
        data: dataSend,

        headers: {
          "Content-Type": "application/json",
        },
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

  function callIfPasswordUpdated(){
    checkIfCurrentPasswordMatch().then((res) => {
      if (res == "Inserted Successfully") {
        return true
      }
      else false
    });
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
        checkCurrentPassword() ||
        checkNewPassword() ||
        checkConfirmPassword() ||
        checkNewCurrentPasswordMatch() ||
        checkPasswordMatch()
          ? ""
          :""
      }
      passHref
      legacyBehavior
    >
      <a
        onClick={() => checkEverythingIsCorrect()}
        aria-label="checkout-products"
        className="bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm"
      >
        {showText}
        <FontAwesomeIcon icon={faArrowRight} className="w-4 ml-2 inline-flex" />
      </a>
    </Link>
  );
}

export default CheckOutButton;
