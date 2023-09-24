"use strict";
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 3646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4108);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function CheckOutButton({ getNewData , cart , showText , webUrl , promoCode , subtotal ,  }) {
    const { 0: cartItems , 1: setCartItems  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: getData , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getNewData);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setCartItems(cart);
    }, [
        cart
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setData(getNewData);
    }, [
        getNewData
    ]);
    function pushMainData() {
        if (checkIfFullName()) {
            showToastError(" \uD83D\uDC64 Username is required");
        } else if (checkIfAge()) {
            showToastError("Age should only contain numeric values");
        } else if (checkIfEmail()) {
            showToastError(" \uD83D\uDCE9 Enter a valid email address");
        } else {
            // if () showToastError("This email has already utilized a 3-day trial")
            //  else
            //   showToast(
            //     "You Will Get Your Order Delivered To Your Email Within 12 Hours."
            //   );
            var items = "";
            getCart.map((item)=>{
                items += items.length == 0 ? "" : " , " + item.productTitle + " - " + item.quantity;
            });
            var referralcode = "";
            cartItems.map((item)=>{
                referralcode += items.length == 0 ? "" : " , " + item.productTitle + " - " + item.referralcode;
            });
            let sendData = {
                FullName: getData.fullName,
                Age: getData.age,
                Email: getData.email,
                PhoneNumber: getData.phoneNumber,
                Information: getData.postalZipCode + " - " + getData.country,
                Created: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_8__/* .createdTimeStamp */ .WU)(),
                Product: items,
                Amount: subtotal + " $",
                PromoCode: promoCode,
                Referralcode: referralcode
            };
            const API_PATH = "https://fitness-plans.regimefit.com/api/payment_form_database_connector.php";
            axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(API_PATH, sendData).then((result)=>{}).catch(function(error) {});
            (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_8__/* .setPaymentFormData */ .Lk)(getData);
        }
    }
    // function checkIfEmailAlreadyPresent() {
    //   let sendData = {
    //     Email: getData.email,
    //     FunctionName: "isEmailAlreadyPresent",
    //   };
    //   const API_PATH =
    //     "https://fitness-plans.regimefit.com/api/free-database-connector.php";
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
    //     "https://fitness-plans.regimefit.com/api/free-database-connector.php";
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
            showToastError(" \uD83D\uDC64 Username is required");
        } else if (checkIfEmail()) {
            showToastError(" \uD83D\uDCE9 Enter a valid email address");
        } else if (checkIfMessage()) {
            showToastError("\uD83D\uDCAC Tell us something");
        } else {
            let sendData = {
                FullName: getData.fullName,
                Email: getData.email,
                Message: getData.message,
                Created: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_8__/* .createdTimeStamp */ .WU)()
            };
            const API_PATH = "https://fitness-plans.regimefit.com/api/contact_us_database_connector.php";
            axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(API_PATH, sendData).then((result)=>{}).catch(function(error) {});
            (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_8__/* .setPaymentFormData */ .Lk)(getData);
        }
    }
    const checkIfFullName = ()=>{
        return getData.fullName === undefined || getData.fullName.length == 0;
    };
    const checkIfAge = ()=>{
        return getData.age === undefined || getData.age.length == 0 || getData.age != parseInt(getData.age, 10);
    };
    const checkIfEmail = ()=>{
        return getData.email === undefined || getData.email.length == 0 || validateEmail(getData.email) == null;
    };
    const validateEmail = (email)=>{
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    const checkIfAmountIsZero = ()=>{
        return subtotal == 0;
    };
    const checkIfMessage = ()=>{
        return getData.message === undefined || getData.message.length == 0;
    };
    function enterAdminPanelPage() {
        if (checkIfUsername()) {
            showToastError(" \uD83D\uDC64 Username is required");
        } else if (checkIfPassword()) {
            showToastError(" \uD83D\uDD11 Password is required");
        } else {
            checkIfLoginMatch().then((res)=>{
                if (res == true) {
                    let data = {
                        UserName: getData.username
                    };
                    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_8__.setLoginData)(data);
                    showToast("Succesfull Login");
                    next_router__WEBPACK_IMPORTED_MODULE_7___default().push(webUrl);
                } else {
                    showToastError("Login Detail Not Match");
                }
            });
        }
    }
    const checkIfUsername = ()=>{
        return getData.username === undefined || getData.username.length == 0;
    };
    const checkIfPassword = ()=>{
        return getData.password === undefined || getData.password.length == 0;
    };
    async function checkIfLoginMatch() {
        const dataSend = {
            username: getData.username,
            password: getData.password,
            callfunction: "LoginDetailMatch"
        };
        try {
            const Login_PATH = "https://fitness-plans.regimefit.com/api/login-database-connector.php";
            let res = await (0,axios__WEBPACK_IMPORTED_MODULE_6__["default"])({
                url: Login_PATH,
                method: "post",
                timeout: 8000,
                data: dataSend,
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
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
    function showToast(text = "You Will Get Your Order Delivered To Your Email Within 12 Hours.") {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(text, {
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
    function showToastError(text = "Cart is currently empty \uD83D\uDED2") {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(text, {
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: Object.entries({
            webUrl
        })[0][1] == "/paymentform" ? cartItems ? cartItems.length == 0 ? "" : webUrl : "" : Object.entries({
            webUrl
        })[0][1] == "/payment" ? checkIfFullName() || checkIfAge() || checkIfEmail() ? "" : checkIfAmountIsZero() ? "/" : webUrl : Object.entries({
            webUrl
        })[0][1] == "/" ? checkIfFullName() || checkIfEmail() || checkIfMessage() ? "" : webUrl : checkIfUsername() || checkIfPassword() ? "" : "",
        passHref: true,
        legacyBehavior: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            onClick: ()=>Object.entries({
                    webUrl
                })[0][1] == "/paymentform" ? cartItems === undefined || cartItems.length == 0 ? showToastError() : (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_8__/* .setPromoCodeInLocalStorage */ .mi)(promoCode) : Object.entries({
                    webUrl
                })[0][1] == "/payment" ?  true ? "" : 0 : Object.entries({
                    webUrl
                })[0][1] == "/" ?  true ? "" : 0 :  true ? "" : 0,
            "aria-label": "checkout-products",
            className: "bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm",
            children: [
                showText,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRight,
                    className: "w-4 ml-2 inline-flex"
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckOutButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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


/***/ })

};
;