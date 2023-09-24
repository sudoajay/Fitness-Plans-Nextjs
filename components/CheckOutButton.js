import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import {
  createdTimeStamp,
  setPaymentFormData,
  setLoginData,
  setPromoCodeInLocalStorage,
  expireTimeStamp,
} from "@/utils/helpers";

import Router from "next/router";

function CheckOutButton({
  getNewData,
  cart,
  showText,
  webUrl,
  promoCode,
  subtotal,
}) {
  const [cartItems, setCartItems] = useState([]);

  const [getData, setData] = useState(getNewData);
  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  useEffect(() => {
    setData(getNewData);
  }, [getNewData]);

  function pushMainData() {
    if (checkIfFullName()) {
      showToastError(" 👤 Username is required");
    } else if (checkIfAge()) {
      showToastError("Age should only contain numeric values");
    } else if (checkIfEmail()) {
      showToastError(" 📩 Enter a valid email address");
    } else {
      // if () showToastError("This email has already utilized a 3-day trial")
      //  else
      //   showToast(
      //     "You Will Get Your Order Delivered To Your Email Within 12 Hours."
      //   );

      var items = "";
      getCart.map((item) => {
        items +=
          items.length == 0
            ? ""
            : " , " + item.productTitle + " - " + item.quantity;
      });

      var referralcode = "";
      cartItems.map((item) => {
        referralcode +=
          items.length == 0
            ? ""
            : " , " + item.productTitle + " - " + item.referralcode;
      });

      let sendData = {
        FullName: getData.fullName,
        Age: getData.age,
        Email: getData.email,
        PhoneNumber: getData.phoneNumber,
        Information: getData.postalZipCode + " - " + getData.country,
        Created: createdTimeStamp(),
        Product: items,
        Amount: subtotal + " $",
        PromoCode: promoCode,
        Referralcode: referralcode,
      };

      const API_PATH =
        "https://canva-plans.regimefit.com/api/payment_form_database_connector.php";

      axios
        .post(API_PATH, sendData)
        .then((result) => {})
        .catch(function (error) {});

      setPaymentFormData(getData);
    }
  }

  // function checkIfEmailAlreadyPresent() {
  //   let sendData = {
  //     Email: getData.email,
  //     FunctionName: "isEmailAlreadyPresent",
  //   };

  //   const API_PATH =
  //     "https://canva-plans.regimefit.com/api/free-database-connector.php";

  //   axios
  //     .post(API_PATH, sendData)
  //     .then((result) => {
  //       if (result.data) {
  //         showToastError("This email has already utilized a 3-day trial");
  //       } else {
  //         sendDataToFreeCanvaDatbase();
  //       }
  //     })
  //     .catch(function (error) {});
  // }

  // function sendDataToFreeCanvaDatbase() {
  //   let sendData = {
  //     Email: getData.email,
  //     FunctionName: "insertData",
  //     Created: createdTimeStamp(12),
  //     Expire: expireTimeStamp(24 * 3 + 12),
  //   };

  //   const API_PATH =
  //     "https://canva-plans.regimefit.com/api/free-database-connector.php";

  //   axios
  //     .post(API_PATH, sendData)
  //     .then((result) => {
  //       if (result.data == "Inserted Successfully") {
  //         showToast(
  //           "You Will Get Your Order Delivered To Your Email Within 12 Hours."
  //         );
  //       } else {
  //         showToastError(
  //           "Something went wrong please contact us on below email"
  //         );
  //       }
  //     })
  //     .catch(function (error) {});
  // }

  function pushContactUsForm() {
    if (checkIfFullName()) {
      showToastError(" 👤 Username is required");
    } else if (checkIfEmail()) {
      showToastError(" 📩 Enter a valid email address");
    } else if (checkIfMessage()) {
      showToastError("💬 Tell us something");
    } else {
      let sendData = {
        FullName: getData.fullName,
        Email: getData.email,
        Message: getData.message,
        Created: createdTimeStamp(),
      };

      const API_PATH =
        "https://canva-plans.regimefit.com/api/contact_us_database_connector.php";

      axios
        .post(API_PATH, sendData)
        .then((result) => {})
        .catch(function (error) {});

      setPaymentFormData(getData);
    }
  }

  const checkIfFullName = () => {
    return getData.fullName === undefined || getData.fullName.length == 0;
  };

  const checkIfAge = () => {
    return (
      getData.age === undefined ||
      getData.age.length == 0 ||
      getData.age != parseInt(getData.age, 10)
    );
  };

  const checkIfEmail = () => {
    return (
      getData.email === undefined ||
      getData.email.length == 0 ||
      validateEmail(getData.email) == null
    );
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkIfAmountIsZero = () => {
    return subtotal == 0;
  };

  const checkIfMessage = () => {
    return getData.message === undefined || getData.message.length == 0;
  };

  function enterAdminPanelPage() {
    if (checkIfUsername()) {
      showToastError(" 👤 Username is required");
    } else if (checkIfPassword()) {
      showToastError(" 🔑 Password is required");
    } else {
      checkIfLoginMatch().then((res) => {
        if (res == true) {
          let data = {
            UserName: getData.username,
          };
          setLoginData(data);

          showToast("Succesfull Login");
          Router.push(webUrl);
        } else {
          showToastError("Login Detail Not Match");
        }
      });
    }
  }

  const checkIfUsername = () => {
    return getData.username === undefined || getData.username.length == 0;
  };

  const checkIfPassword = () => {
    return getData.password === undefined || getData.password.length == 0;
  };

  async function checkIfLoginMatch() {
    const dataSend = {
      username: getData.username,
      password: getData.password,
      callfunction: "LoginDetailMatch",
    };

    try {
      const Login_PATH =
        "https://canva-plans.regimefit.com/api/login-database-connector.php";

      let res = await axios({
        url: Login_PATH,
        method: "post",
        timeout: 8000,
        data: dataSend,
        withCredentials: true,
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
        Object.entries({ webUrl })[0][1] == "/paymentform"
          ? cartItems
            ? cartItems.length == 0
              ? ""
              : webUrl
            : ""
          : Object.entries({ webUrl })[0][1] == "/payment"
          ? checkIfFullName() || checkIfAge() || checkIfEmail()
            ? ""
            : checkIfAmountIsZero()
            ? "/"
            : webUrl
          : Object.entries({ webUrl })[0][1] == "/"
          ? checkIfFullName() || checkIfEmail() || checkIfMessage()
            ? ""
            : webUrl
          : checkIfUsername() || checkIfPassword()
          ? ""
          : ""
      }
      passHref
      legacyBehavior
    >
      <a
        onClick={() =>
          Object.entries({ webUrl })[0][1] == "/paymentform"
            ? cartItems === undefined || cartItems.length == 0
              ? showToastError()
              : setPromoCodeInLocalStorage(promoCode)
            : Object.entries({ webUrl })[0][1] == "/payment"
            ? typeof window === "undefined"
              ? ""
              : pushMainData()
            : Object.entries({ webUrl })[0][1] == "/"
            ? typeof window === "undefined"
              ? ""
              : pushContactUsForm()
            : typeof window === "undefined"
            ? ""
            : enterAdminPanelPage()
        }
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
