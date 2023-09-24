"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 4108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B7": () => (/* binding */ getPaymentFormData),
/* harmony export */   "FI": () => (/* binding */ setLocalData),
/* harmony export */   "Lk": () => (/* binding */ setPaymentFormData),
/* harmony export */   "Pe": () => (/* binding */ getCartDiscountSubTotal),
/* harmony export */   "Tl": () => (/* binding */ saveLocalData),
/* harmony export */   "WU": () => (/* binding */ createdTimeStamp),
/* harmony export */   "in": () => (/* binding */ getPromoCodeInLocalStorage),
/* harmony export */   "mi": () => (/* binding */ setPromoCodeInLocalStorage),
/* harmony export */   "uq": () => (/* binding */ getCartSubTotal)
/* harmony export */ });
/* unused harmony export expireTimeStamp */
function saveLocalData(cart) {
    localStorage.setItem("Regime_Fit_Product", JSON.stringify([
        cart
    ]));
}
function getLocalData() {
    return JSON.parse(localStorage.getItem("Regime_Fit_Product"));
}
function setLocalData(setCart) {
    const localData = getLocalData();
    if (localData) {
        if (Array.isArray(localData[0])) {
            setCart([
                ...localData[0]
            ]);
        } else {
            setCart([
                localData[0]
            ]);
        }
    }
}
function getCartSubTotal(cart) {
    if (cart.length === 0) {
        return 0;
    } else {
        let totalPrice = 0;
        cart.forEach((item)=>totalPrice += parseInt(item.quantity) * parseFloat(item.price));
        return Math.round(totalPrice * 100) / 100;
    }
}
function setPaymentFormData(data) {
    localStorage.setItem("Regime_Fit_Form", JSON.stringify(data));
}
function getPaymentFormData() {
    return JSON.parse(localStorage.getItem("Regime_Fit_Form"));
}
function createdTimeStamp(value = 0) {
    var d1 = new Date();
    d1.setHours(d1.getHours() + 5 + value);
    d1.setMinutes(d1.getMinutes() + 30);
    return d1.toISOString().slice(0, 19).replace("T", " ");
}
function expireTimeStamp(value = 0) {
    var d1 = new Date();
    d1.setHours(d1.getHours() + 5 + value);
    d1.setMinutes(d1.getMinutes() + 30);
    return d1.toISOString().slice(0, 19).replace("T", " ");
}
function getCartDiscountSubTotal(amount, discount) {
    if (discount != "") {
        return Math.round((amount - amount * parseInt(discount) / 100) * 100) / 100;
    } else {
        return amount;
    }
}
function setPromoCodeInLocalStorage(code) {
    localStorage.setItem("Promo_code", JSON.stringify({
        PromoCode: code
    }));
}
function getPromoCodeInLocalStorage() {
    return JSON.parse(localStorage.getItem("Promo_code"));
}


/***/ })

};
;