"use strict";
exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 8215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ text  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "leading-relaxed font-primary font-bold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4",
        children: text
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTitle);


/***/ }),

/***/ 3053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ PayPalPayButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2929);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// This values are the props in the UI
const currency = "USD";
const style = {
    layout: "vertical"
};
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency , amount , formData , cart , getPromoCode , showSpinner ,  })=>{
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options , isPending  }, dispatch] = (0,_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_2__.usePayPalScriptReducer)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency
            }
        });
    }, [
        amount,
        currency,
        showSpinner
    ]);
    function showToast1(text = "You Will Get Your Order Delivered To Your Email Within 12 Hours.") {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }
    function showToastError1(text = "Something went Wrong Contact Us") {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(text, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showSpinner && isPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "spinner"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_2__.PayPalButtons, {
                style: style,
                disabled: false,
                forceReRender: [
                    amount,
                    currency,
                    style
                ],
                fundingSource: undefined,
                createOrder: async (data, actions)=>{
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: amount
                                }
                            }, 
                        ]
                    }).then((orderId)=>{
                        // Your code here after create the order
                        return orderId;
                    });
                },
                onApprove: async function(data, actions) {
                    return actions.order.capture().then(function() {
                        // Your code here after capture the order
                        var items = "";
                        getCart.map((item)=>{
                            items += (items.length == 0 ? "" : " , ") + item.productTitle + " - " + item.quantity;
                        });
                        var referralcode = "";
                        cartItems.map((item)=>{
                            referralcode += (items.length == 0 ? "" : " , ") + item.productTitle + " - " + item.referralcode;
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
                            AccessToken: data.facilitatorAccessToken
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
                }
            })
        ]
    });
};
async function postJsonDataPayment(data) {
    try {
        const response = await fetch("http://localhost:3000/api/payment", {
            method: "POST",
            // mode: "no-cors", // no-cors, *cors, same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "include", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json"
            },
            // redirect: "follow", // manual, *follow, error
            // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data)
        });
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
function PayPalPayButton({ data , subtotal , cart , promoCode  }) {
    const { 0: getAmount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(subtotal);
    // AXtS3tI1_K3qJOGb064RkufKICr4FJWqoRxsoGh5l9Sprdj1zN9VY0gc0N_JZdA7z3CMlvWLRhj0pXjk
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_2__.PayPalScriptProvider, {
            options: {
                "client-id": "AXtS3tI1_K3qJOGb064RkufKICr4FJWqoRxsoGh5l9Sprdj1zN9VY0gc0N_JZdA7z3CMlvWLRhj0pXjk",
                components: "buttons",
                currency: currency
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonWrapper, {
                currency: currency,
                amount: subtotal,
                formData: data,
                cart: cart,
                getPromoCode: promoCode,
                showSpinner: false
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1499);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4108);
/* harmony import */ var _components_PayPalButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3053);
/* harmony import */ var _components_RazorPayButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8263);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PayPalButton__WEBPACK_IMPORTED_MODULE_3__, _components_RazorPayButton__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([_components_PayPalButton__WEBPACK_IMPORTED_MODULE_3__, _components_RazorPayButton__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function PaymentTable({ cart  }) {
    const { 0: cartItems , 1: setCartItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: subtotal , 1: setSubtotal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: getData , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: getPromoCode , 1: setPromoCode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const promoCode = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getPromoCodeInLocalStorage */ ["in"])();
        if (promoCode == null) next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/cart");
        else {
            setPromoCode(promoCode.PromoCode);
            const data = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getPaymentFormData */ .B7)();
            if (data == null) next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/paymentform");
            else setData(data);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const objectLength = (obj)=>Object.entries(obj).length;
        if (objectLength(cart) == 0) next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/cart");
        setCartItems(cart);
        if (getPromoCode != "") checkIfPromoCodeMatch(getPromoCode);
        else setSubtotal((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getCartSubTotal */ .uq)(cart));
    }, [
        cart,
        getPromoCode
    ]);
    async function checkIfPromoCodeMatch(promoCode) {
        try {
            const response = await fetch("http://localhost:3000/api/promocode/" + promoCode, {
                method: "GET"
            });
            const result = await response.json();
            let newSubTotal;
            newSubTotal = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getCartDiscountSubTotal */ .Pe)((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getCartSubTotal */ .uq)(cart), !result.PercentOff ? "0" : result.PercentOff);
            setSubtotal(newSubTotal);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        class: "mx-auto container flex items-center",
        id: "nav",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            class: "w-full pt-0 p-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "mx-auto md:p-6 md:w-1/2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        method: "POST",
                        action: "#login",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "grid md:grid-cols-3 md:gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "mb-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            for: "fullName",
                                            class: " block text-gray-700 text-lg font-primary font-semibold mb-2",
                                            children: "Subtotal:"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "font-primary text-lg text-palette-primary font-semibold mb-4 ",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            currency: "$",
                                            num: subtotal,
                                            numSize: "text-xl"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "mb-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    for: "fullName",
                                    class: "block text-gray-700 text-lg font-primary font-semibold mb-2",
                                    children: "Choose Payment Method:"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-col items-center mt-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RazorPayButton__WEBPACK_IMPORTED_MODULE_4__/* .RazorPayButton */ .N, {
                                    data: getData,
                                    subtotal: subtotal,
                                    cart: cartItems,
                                    promoCode: getPromoCode
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                class: " font-primary font-medium text-lg flex flex-col items-center mb-5 mt-3",
                                children: "Or"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PayPalButton__WEBPACK_IMPORTED_MODULE_3__/* .PayPalPayButton */ .L, {
                                        data: getData,
                                        subtotal: subtotal,
                                        cart: cartItems,
                                        promoCode: getPromoCode
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        class: " font-primary font-semibold text-xs text-red-500",
                                        children: [
                                            "For International Users Only ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                                class: "star",
                                                children: "*"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                                class: "star",
                                                children: "*"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Price({ currency , num , numSize  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            currency,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: numSize,
                children: num
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);


/***/ }),

/***/ 8263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ RazorPayButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_razorpay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1040);
/* harmony import */ var react_razorpay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_razorpay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function RazorPayButton({ data , subtotal , cart , promoCode  }) {
    const Razorpay = react_razorpay__WEBPACK_IMPORTED_MODULE_2___default()();
    function showToast(text = "You Will Get Your Order Delivered To Your Email Within 12 Hours.") {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }
    function showToastError(text = "Something went Wrong Contact Us") {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(text, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }
    const handlePayment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((getCart, getdata, getTotal, getPromoCode)=>{
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
                contact: getdata.phoneNumber
            },
            notes: {
                address: "fitness"
            },
            theme: {
                color: "#009688"
            },
            handler: (res)=>{
                var items = "";
                getCart.map((item)=>{
                    items += (items.length == 0 ? "" : " , ") + item.productTitle + " - " + item.quantity;
                });
                var referralcode = "";
                cartItems.map((item)=>{
                    referralcode += (items.length == 0 ? "" : " , ") + item.productTitle + " - " + item.referralcode;
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
                    Referralcode: referralcode,
                    PaymentMethod: "RazorPay",
                    PaymentID: res.razorpay_payment_id,
                    OrderID: "",
                    AccessToken: ""
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
            }
        };
        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [
        Razorpay
    ]);
    async function postJsonDataPayment(data) {
        try {
            const response = await fetch("http://localhost:3000/api/payment", {
                method: "POST",
                // mode: "no-cors", // no-cors, *cors, same-origin
                // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: "include", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json"
                },
                // redirect: "follow", // manual, *follow, error
                // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log("Success:", result);
            if (result) {
                showToast();
                next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/");
            } else {
                showToastError();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "App",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            type: "button",
            class: "text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2",
            onClick: ()=>handlePayment(cart, data, subtotal, promoCode),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    class: "h-8 w-8 mr-1 object-contain",
                    src: "/images/item/razorpay.svg",
                    alt: "dummy-image"
                }),
                "Pay with RazorPay"
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;