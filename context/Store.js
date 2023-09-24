import { createContext, useContext, useState, useEffect } from 'react'
import { setLocalData, saveLocalData } from '@/utils/helpers'

const CartContext = createContext()
const AddToCartContext = createContext()
const UpdateCartQuantityContext = createContext()

export function useCartContext() {
  return useContext(CartContext)
}

export function useAddToCartContext() {
  return useContext(AddToCartContext)
}

export function useUpdateCartQuantityContext() {
  return useContext(UpdateCartQuantityContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    setLocalData(setCart)
  }, [])

  useEffect(() => {
    // do this to make sure multiple tabs are always in sync
    const onReceiveMessage = (e) => {
      setLocalData(setCart)
    }

    window.addEventListener("storage", onReceiveMessage);
    return () => {
      window.removeEventListener("storage", onReceiveMessage);
    }
  }, [])

  async function addToCart(newItem) {
    setisLoading(true)
    // empty cart
    if (cart.length === 0) {
      setCart([
        ...cart,
        newItem
      ])

    
      saveLocalData(newItem)


    } else {
      let newCart = [...cart]
      let itemAdded = false
      // loop through all cart items to check if variant
      // already exists and update quantity
      newCart.map(item => {
        if (item.productHandle === newItem.productHandle) {
          item.quantity += newItem.quantity
          itemAdded = true
        }
      })

      let newCartWithItem = [...newCart]
      if (itemAdded) {
      } else {
        // if its a new item than add it to the end
        newCartWithItem = [...newCart, newItem]
      }

      setCart(newCartWithItem)
      saveLocalData(newCartWithItem)
    }
    setisLoading(false)
  }

  async function updateCartItemQuantity(id, quantity) {
    setisLoading(true)
    let newQuantity = Math.floor(quantity)
    if (quantity === '') {
      newQuantity = ''
    }
    let newCart = [...cart]
    newCart.forEach(item => {
      if (item.productHandle === id) {
        item.quantity = newQuantity
      }
    })

    // take out zeroes items
    newCart = newCart.filter(i => i.quantity !== 0)
    setCart(newCart)

    saveLocalData(newCart)
    setisLoading(false)
  }

  return (
    <CartContext.Provider value={[cart, isLoading]}>
      <AddToCartContext.Provider value={addToCart}>
        <UpdateCartQuantityContext.Provider value={updateCartItemQuantity}>
          {children}
        </UpdateCartQuantityContext.Provider>
      </AddToCartContext.Provider>
    </CartContext.Provider>
  )
}
