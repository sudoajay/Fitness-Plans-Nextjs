import { useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProductImage({ products }) {
  const [mainImg, setMainImg] = useState(products.images[0]);
  const [itemId, setItemId] = useState(products.id);

  const ref = useRef();

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  const objectLength = (obj) => Object.entries(obj).length;

  const lenOfImages = [
    ..."x".repeat(objectLength(products.images)).split("").keys(),
  ];

  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-150">
        <Image
          src={`/images/item/${itemId}/${mainImg}`}
          alt={products.title}
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="relative flex border-t border-palette-lighter">
        <button
          aria-label="left-scroll"
          className="h-44 bg-palette-lighter hover:bg-palette-light  absolute left-0 z-10 opacity-75"
          onClick={() => scroll(-300)}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="w-3 mx-1 text-palette-primary"
          />
        </button>
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
        >
          {lenOfImages.map((value) => (
            <button
              key={value}
              className="relative w-40 h-44 flex-shrink-0 rounded-sm "
              onClick={() => setMainImg(products.images[value])}
            >
              <Image
                src={`/images/item/${itemId}/${products.images[value]}`}
                alt={products.title}
                layout="fill"
                className=""
              />
            </button>
          ))}
        </div>
        <button
          aria-label="right-scroll"
          className="h-44 bg-palette-lighter hover:bg-palette-light  absolute right-0 z-10 opacity-75"
          onClick={() => scroll(300)}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-3 mx-1 text-palette-primary"
          />
        </button>
      </div>
    </div>
  );
}

export default ProductImage;
