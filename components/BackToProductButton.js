"use-client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

function BackToProductButton({text="Back To All Products" , url="/" }) {
  const router = useRouter()

  

return  ( 
  <Link  href={url == "GoBack"? "" : url } passHref legacyBehavior>
    <a
      aria-label="back-to-products"
      className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
    justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
    onClick={()=> url == "GoBack"? router.back() : ""}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="w-4 mr-2 inline-flex" />
      {text}
    </a>
  </Link>
)
}

export default BackToProductButton
