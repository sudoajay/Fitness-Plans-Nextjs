import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { createdTimeStamp } from "@/utils/helpers";
import axios from "axios";

import { toast } from "react-toastify";

// This values are the props in the UI
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  currency,
  amount,
  formData,
  cart,
  getPromoCode,
  showSpinner,
}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [amount, currency, showSpinner]);

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

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={async (data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={async function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order

            var items = "";
            getCart.map((item) => {
              items +=
                (items.length == 0 ? "" : " , ") +
                item.productTitle +
                " - " +
                item.quantity;
            });

            var referralcode = "";
            cartItems.map((item) => {
              referralcode +=
                (items.length == 0 ? "" : " , ") +
                item.productTitle +
                " - " +
                item.referralcode;
            });

            let sendData = {
              FullName: formData.fullName,
              Age: formData.age,
              Email: formData.email,
              PhoneNumber: formData.phoneNumber,
              Information: formData.postalZipCode + " - " + formData.country,
              Product: items,
              Amount: amount + " $",
              PromoCode: getPromoCode,
              Referralcode: referralcode,
              PaymentMethod: "PayPal",
              PaymentID: data.payerID,
              OrderID: data.orderID,
              AccessToken: data.facilitatorAccessToken,
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
          });
        }}
      />
    </>
  );
};

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

export function PayPalPayButton({ data, subtotal, cart, promoCode }) {
  const [getAmount, setAmount] = useState(subtotal);
  // AXtS3tI1_K3qJOGb064RkufKICr4FJWqoRxsoGh5l9Sprdj1zN9VY0gc0N_JZdA7z3CMlvWLRhj0pXjk

  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AXtS3tI1_K3qJOGb064RkufKICr4FJWqoRxsoGh5l9Sprdj1zN9VY0gc0N_JZdA7z3CMlvWLRhj0pXjk",
          components: "buttons",
          currency: currency,
        }}
      >
        <ButtonWrapper
          currency={currency}
          amount={subtotal}
          formData={data}
          cart={cart}
          getPromoCode={promoCode}
          showSpinner={false}
        />
      </PayPalScriptProvider>
    </div>
  );
}
