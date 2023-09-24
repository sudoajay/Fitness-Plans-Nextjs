import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <div className="">
      <footer className="py-1 flex justify-center font-normal  font-primary items-center">
        Copyright{" "}
        <FontAwesomeIcon
          icon={faCopyright}
          className="fa-regular w-4 text-black-600 mx-1"
        />{" "}
        2023. All rights reserved.
      </footer>
   

      <footer className="pb-3 flex justify-center font-normal  font-primary items-center">
        <Link href="/terms-conditions" passHref legacyBehavior>
          <a class="group transition-all duration-300 ease-in-out  mr-5">
            <span class="  bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Terms Conditions
            </span>
          </a>
        </Link>

        <Link href="/privacy-policy" passHref legacyBehavior>
        

          <a class="group transition-all duration-300 ease-in-out  mr-5">
            <span class="  bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Privacy Policy
            </span>
          </a>
        </Link>

        <Link href="/contact-us" passHref legacyBehavior>
         
          <a class="group transition-all duration-300 ease-in-out  mr-5">
            <span class="  bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact Us
            </span>
          </a>
        </Link>

        <Link href="/shipping-delivery-Policy" passHref legacyBehavior>
         
          <a class="group transition-all duration-300 ease-in-out  mr-5">
            <span class="  bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Shipping Delivery Policy
            </span>
          </a>
        </Link>

        <Link href="/cancellation-refund-policy" passHref legacyBehavior>
    
          <a class="group transition-all duration-300 ease-in-out  mr-5">
            <span class="  bg-left-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Cancellation Refund Policy
            </span>
          </a>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
