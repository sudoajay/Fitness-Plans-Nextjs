import { useState, useEffect } from "react";
import { useUpdateCartQuantityContext } from "@/context/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheck,
  faL,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Price from "@/components/Price";
import { getCartSubTotal, getCartDiscountSubTotal } from "@/utils/helpers";
import axios from "axios";
import { toast } from "react-toastify";
import CheckOutButton from "@/components/CheckOutButton";
import BackToProductButton from "@/components/BackToProductButton";

import {useRouter} from 'next/router';

function CartTable({ cart }) {
  const updateCartQuantity = useUpdateCartQuantityContext();
  const [cartItems, setCartItems] = useState([]);
  const [getTotal, setTotal] = useState(0);
  const [getPromoCode, setPromoCode] = useState("");
  const [isPromoCodeMatch, setPromoCodeMatch] = useState(false);
  const [subtotal, setSubtotal] = useState(5);
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return;
    const query = router.query;
    if (Object.keys(query).length != 0  && typeof (query.promocode) != 'undefined' && query.promocode.length == 5) {
      setPromoCode(query.promocode)
      ValueChangePromoCode(query.promocode)
    }else{
      setPromoCode("")
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    setCartItems(cart);
    setSubtotal(getCartSubTotal(cart));

    setTotal(getCartSubTotal(cart));
  }, [cart]);

  useEffect(() => {
    if (getPromoCode.length != 5) {
      setPromoCodeMatch(false);
      setSubtotal(getCartSubTotal(cart));
    }
  }, [getPromoCode]);



  function getAllPromoCode(promoCode) {
    const API_PATH =
      "https://fitness-plans.regimefit.com/api/promo_code_database_connector.php";

    axios
      .post(API_PATH, { PromoCode: promoCode })
      .then((result) => {
        if(getTotal !=0 ){
        setPromoCode(promoCode);
        let newSubTotal = getCartDiscountSubTotal(getTotal, result.data);
          
        
        if (newSubTotal !== getTotal) {
          showToast();
          setPromoCodeMatch(true);
        } else {
          showToastError();
          setPromoCodeMatch(false);
        }
        setSubtotal(newSubTotal);
      }else{
        if(setCartItems.length != 0) {
          showToastError("Promo code not valid for free items");
        }else{
          showToastError("Cart is currently empty 🛒");
        }
      }
      })
      .catch(function (error) {});
  }

  function ValueChangePromoCode(promoCode) {
    
    if (isPromoCodeMatch) {
      setPromoCode("");
      setPromoCodeMatch(false);
    } else {
      if (promoCode.length == 5) {
        getAllPromoCode(promoCode);
      } else {
        showToastError();
        setSubtotal(getTotal);
      }
    }
  }

  function showToast(text = "Promo Code Applied Successfully!") {
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

  function showToastError(text = "Promo Code Is Invalid!") {
    toast.error(text, {
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

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity);
  }

  return (
    <div>
      <div className="min-h-80 max-w-4xl my-4 sm:my-4 mx-auto w-full">
        <table className="mx-auto">
          <thead>
            <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
              <th className="font-primary font-medium pl-2 py-4">Product</th>
              <th className="font-primary font-medium px-6 py-4">Quantity</th>
              <th className="font-primary font-medium px-6 py-4 hidden sm:table-cell">
                Price
              </th>
              <th className="font-primary font-medium px-6 py-4">Remove</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-palette-lighter">
            {cartItems.map((item) => (
              <tr
                key={item.variantId}
                className="text-sm sm:text-base text-gray-600 text-center"
              >
                <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                  <Link
                    passHref
                    legacyBehavior
                    href={`/products/${item.productHandle}`}
                  >
                    <a className="pt-1 hover:text-palette-dark">
                      <img
                        src={`/images/item/${item.productImage}`}
                        alt={item.productImage.altText}
                        height={64}
                        width={64}
                        className={` sm:inline-flex`}
                      />
                      <span className="pl-4  hidden sm:inline-flex ">
                        {item.productTitle}
                      </span>
                    </a>
                  </Link>
                </td>
                <td className="font-primary font-medium px-4 sm:px-6 py-4">
                  <input
                    type="number"
                    inputMode="numeric"
                    id="variant-quantity"
                    name="variant-quantity"
                    min="1"
                    step="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(item.productHandle, e.target.value)
                    }
                    className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                  />
                </td>
                <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                  <Price currency="$" num={item.price} numSize="text-lg" />
                </td>
                <td className="font-primary font-medium px-4 sm:px-6 py-4">
                  <button
                    aria-label="delete-item"
                    className=""
                    onClick={() => updateItem(item.productHandle, 0)}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter"
                    />
                  </button>
                </td>
              </tr>
            ))}

            {getTotal === 0 ? null : (
              <tr className="text-center">
                <td></td>
                <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                  Total
                </td>
                <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <Price currency="$" num={getTotal} numSize="text-xl" />
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
          <tbody className="divide-y divide-palette-lighter">
            {getTotal === 0 ? null : (
              <tr className="text-center">
                <td></td>
                <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                  Promo Code
                </td>
                <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <div class="relative">
                    <input
                      type="text"
                      id="promoCode"
                      class="block uppercase  shadow appearance-none border-2 border-palette-light rounded w-32 h-12  py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-palette-primary transition duration-500 ease-in-out"
                      placeholder="Code"
                      value={getPromoCode}
                      onChange={(evt) => {
                        setPromoCode(evt.target.value.toUpperCase());
                      }}
                    />

                    <button
                      aria-label="delete-item"
                      class="text-white absolute right-0 top-0  font-medium rounded  text-sm"
                      onClick={() => ValueChangePromoCode(getPromoCode)}
                    >
                      <FontAwesomeIcon
                        icon={isPromoCodeMatch ? faTimes : faCheck}
                        className=" h-12 text-palette-primary border border-palette-light p-3  hover:bg-palette-lighter"
                      />
                    </button>
                  </div>
                </td>

                <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4 ">
                  <div class="relative pb-4">
                    <a
                      
                      class="transititext-primary text-primary transition duration-10 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                      data-te-toggle="tooltip"
                      title="To Obtain Your Exclusive Promo Code, Kindly Reach Out To Us."
                    >
                      <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className=" h-6  "
                    />
                    </a>

                   
                  </div>
                </td>
              </tr>
            )}
            {getTotal === 0 ? null : (
              <tr className="text-center">
                <td></td>
                <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                  Subtotal
                </td>
                <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <Price currency="$" num={subtotal} numSize="text-xl" />
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="max-w-sm mx-auto space-y-4 px-2">
        <CheckOutButton
          cart={cart}
          showText={"Check Out"}
          webUrl={"/paymentform"}
          promoCode={getPromoCode}
        />
        <BackToProductButton />
      </div>
    </div>
  );
}

export default CartTable;
