"use strict";
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 2225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JA": () => (/* binding */ useAddToCartContext),
/* harmony export */   "UH": () => (/* binding */ useUpdateCartQuantityContext),
/* harmony export */   "Zl": () => (/* binding */ CartProvider),
/* harmony export */   "iQ": () => (/* binding */ useCartContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4108);



const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AddToCartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const UpdateCartQuantityContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function useCartContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);
}
function useAddToCartContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AddToCartContext);
}
function useUpdateCartQuantityContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UpdateCartQuantityContext);
}
function CartProvider({ children  }) {
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: isLoading , 1: setisLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__/* .setLocalData */ .FI)(setCart);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // do this to make sure multiple tabs are always in sync
        const onReceiveMessage = (e)=>{
            (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__/* .setLocalData */ .FI)(setCart);
        };
        window.addEventListener("storage", onReceiveMessage);
        return ()=>{
            window.removeEventListener("storage", onReceiveMessage);
        };
    }, []);
    async function addToCart(newItem) {
        setisLoading(true);
        // empty cart
        if (cart.length === 0) {
            setCart([
                ...cart,
                newItem
            ]);
            (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__/* .saveLocalData */ .Tl)(newItem);
        } else {
            let newCart = [
                ...cart
            ];
            let itemAdded = false;
            // loop through all cart items to check if variant
            // already exists and update quantity
            newCart.map((item)=>{
                if (item.productHandle === newItem.productHandle) {
                    item.quantity += newItem.quantity;
                    itemAdded = true;
                }
            });
            let newCartWithItem = [
                ...newCart
            ];
            if (itemAdded) {} else {
                // if its a new item than add it to the end
                newCartWithItem = [
                    ...newCart,
                    newItem
                ];
            }
            setCart(newCartWithItem);
            (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__/* .saveLocalData */ .Tl)(newCartWithItem);
        }
        setisLoading(false);
    }
    async function updateCartItemQuantity(id, quantity) {
        setisLoading(true);
        let newQuantity = Math.floor(quantity);
        if (quantity === "") {
            newQuantity = "";
        }
        let newCart = [
            ...cart
        ];
        newCart.forEach((item)=>{
            if (item.productHandle === id) {
                item.quantity = newQuantity;
            }
        });
        // take out zeroes items
        newCart = newCart.filter((i)=>i.quantity !== 0);
        setCart(newCart);
        (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__/* .saveLocalData */ .Tl)(newCart);
        setisLoading(false);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: [
            cart,
            isLoading
        ],
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddToCartContext.Provider, {
            value: addToCart,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UpdateCartQuantityContext.Provider, {
                value: updateCartItemQuantity,
                children: children
            })
        })
    });
}


/***/ })

};
;