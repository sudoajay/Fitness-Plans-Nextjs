import { useState } from "react";

import Plus1 from "@/context/Plus1";
import { motion } from "framer-motion";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  //       animate={{ height: `${isActive ?  ["2"].indexOf(title.id) > -1 ? "18rem": ["9"].indexOf(title.id) > -1 ? "17.5rem": ["1"].indexOf(title.id) > -1 ? "21rem" :["6"].indexOf(title.id) > -1 ? "24rem" : ["8"].indexOf(title.id) > -1 ? "22.0rem":    ["5"].indexOf(title.id) > -1 ? "25rem" : ["3"].indexOf(title.id) > -1 ? "25rem" : ["7"].indexOf(title.id) > -1 ? "25.5rem": ["4"].indexOf(title.id) > -1 ? "25.5rem": ["10"].indexOf(title.id) > -1 ? "26.5rem": ["11"].indexOf(title.id) > -1 ? "33rem":  "26rem" : ["10"].indexOf(title.id) > -1 ? "8rem":["4","7"].indexOf(title.id) > -1 ? "9rem":  ["5"].indexOf(title.id) > -1 ?  "7.5rem"   :["9"].indexOf(title.id) > -1 ?  "6rem" : ["1","3","6","11"].indexOf(title.id) > -1 ?"8rem" :"6rem"  }` }}

  return (
    <motion.div
      initial={{ height: "3.5rem" }}
      animate={{ height: `${isActive ? "14rem" : "5rem"}` }}
      transition={{ ease: "circOut", duration: 0.4 }} 
      className=" w-full flex-col    grid grid-cols-1 divide-y   "
    >
      <div
        className="flex w-full   items-center justify-between pb-7"
        onClick={() => setIsActive((pevState) => !pevState)}
      >
        <h5 className="font-primary text-lg font-semibold">{title.question}</h5>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: `${isActive ? "45deg" : "180deg"}` }}
          className="pr-2 "
        >
          <Plus1 className="w-5" />
        </motion.div>
      </div>

      {isActive && (
        <motion.div className="overflow-auto">
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ ease: "circOut", duration: 0.4, delay: 0.05 }}
            className="pt-4 font-primary font-normal text-base text-black-txt/50"
          >
            {content.answer}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};
