import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext, useAddToCartContext } from '@/context/Store'
import { toast } from "react-toastify";
import {useRouter} from 'next/router';


function ProductForm({ title, handle, price, mainImg }) {
  const [quantity, setQuantity] = useState(1)
  const isLoading = useCartContext()[2]
  const addToCart = useAddToCartContext()
  const router = useRouter();
  const [getReferralcode, setReferralcode] = useState("");


  useEffect(() => {
    if(!router.isReady) return;
    const query = router.query;
    if (Object.keys(query).length != 0  && typeof (query.referralcode) != 'undefined' && query.referralcode.length == 5) {
      setReferralcode(query.referralcode)
    }else{
      setReferralcode("")
    }
  }, [router.isReady, router.query]);

  const atcBtnStyle = isLoading ?
    `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark opacity-25 cursor-none`
    :
    `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`

  async function handleAddToCart() {
    // update store context
    if (quantity !== '') {

      showToast("Product added to cart 🛒");


      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        price: price,
        quantity: quantity,
        referralcode:getReferralcode
      })
    }
  }

  function updateQuantity(e) {
    if (e === '') {
      setQuantity('')
    } else {
      setQuantity(Math.floor(e))
    }
  }

  function showToast (text){
    toast.success(text, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className=" flex flex-col items-start space-y-1 flex-grow-0">
          <label className="text-gray-500 text-base">Qty.</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
        {/* <div className="flex flex-col items-start space-y-1 flex-grow">
          <label className="text-gray-500 text-base">Size</label>
          <select
            id="size-selector"
            name="size-selector"
            onChange={(event) => handleSizeChange(event.target.value)}
            value={variantId}
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            {
              Object.keys(variants).forEach(function(index) {
                <option
                  id={variants[index]}
                  key={variants[index]}
                  value={variants[index]}
                >
                  {variants[index]}
                </option>
            })
            }
          </select>
        </div> */}
      </div>
      <button
        className={atcBtnStyle}
        aria-label="cart-button"
        onClick={handleAddToCart}
      >
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
      </button>
    </div>
  )
}

export default ProductForm
