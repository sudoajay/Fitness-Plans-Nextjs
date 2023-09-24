"use-client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft ,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

function BackToPanelButton({text="" , url="/" }) {
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


function PanelSettingButton({text="" , url="/" }) {
  const router = useRouter()

  

return  ( 

  <Link  href={url == "GoBack"? "" : url } passHref legacyBehavior>
    <a
      aria-label="back-to-products"
      className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
    justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
    onClick={()=> url == "GoBack"? router.back() : ""}
    >
      {text}
      <FontAwesomeIcon icon={faArrowRight} className="w-4 ml-2 inline-flex" />
      
      
    </a>
  </Link>
)
}


export {BackToPanelButton, PanelSettingButton};