
export function saveLocalData(cart) {
  localStorage.setItem(process.env.productTitle, JSON.stringify([cart]))
}

function getLocalData() {
  return JSON.parse(localStorage.getItem(process.env.productTitle))
}


export function setLocalData(setCart) {
  const localData = getLocalData()

  if (localData) {
    if (Array.isArray(localData[0])) {
      setCart([...localData[0]])
    }
    else {
      setCart([localData[0]])
    }
  }
}

export function getCartSubTotal(cart) {
  if (cart.length === 0) {
    return 0
  }
  else {
    let totalPrice = 0
    cart.forEach(item => totalPrice += parseInt(item.quantity) * parseFloat(item.price))
    return Math.round(totalPrice * 100) / 100
  }
}


export function setPaymentFormData(data) {
  localStorage.setItem(process.env.paymentForm, JSON.stringify(data))
}

export function getPaymentFormData() {
  return JSON.parse(localStorage.getItem(process.env.paymentForm))
}



export function createdTimeStamp(value=0) {
  var d1 = new Date()
  d1.setHours(d1.getHours() + 5+value)
  d1.setMinutes(d1.getMinutes() + 30)
  return d1.toISOString().slice(0, 19).replace('T', ' ');

}

export function expireTimeStamp(value=0) {
  var d1 = new Date()
  d1.setHours(d1.getHours() + 5+ value)
  d1.setMinutes(d1.getMinutes() + 30)
  return d1.toISOString().slice(0, 19).replace('T', ' ');

}


export function getCartDiscountSubTotal(amount,discount){

  if(discount != ""){
        return Math.round((amount - ((amount * parseInt(discount)) /100)) * 100) / 100
  }else{
    return amount
  }
}

export function setPromoCodeInLocalStorage(code) {
  localStorage.setItem(process.env.promoCode, JSON.stringify({PromoCode:code}))
}

export function getPromoCodeInLocalStorage() {
  return JSON.parse(localStorage.getItem(process.env.promoCode))
}