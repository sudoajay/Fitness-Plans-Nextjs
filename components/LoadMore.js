import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export function LoadMoreAnimation({ text }) {
  const [hideButton, setHideButton] = useState(false);
  const [showtext, setShowText] = useState(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  function hideLoadingButton() {
    setHideButton(true);
    showTextNow();
  }

  const showTextNow = async () => {
    await delay(1000);
    setShowText(true);
  };

  return (
    <div class="container pb-20 px-10 pt-10 mx-0 min-w-full flex flex-col items-center">
      {hideButton ? (
        showtext ? (
          <p className="flex justify-center font-medium text-xl  font-primary  text-gray-500  items-center">
            More plans are coming soon.
          </p>
        ) : (
          <div
            class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-palette-primary rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        )
      ) : (
        <button
          type="button"
          onClick={() => hideLoadingButton()}
          class="text-white  bg-palette-primary font-medium rounded-md text-base px-5 py-2.5 text-center inline-flex items-center focus:ring-palette-light focus:outline-none hover:bg-palette-dark  "
        >
          Load More...
        </button>
      )}
    </div>
  );
}
