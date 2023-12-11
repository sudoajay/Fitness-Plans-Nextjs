import SupportIcon from "@/context/SupportIcon";
import { Accordion } from "@/core/Accordion";
import { AnimationContainer } from "@/core/AnimationContainer";
import { BadgeL } from "@/core/Badge";

export const HelpSection = ({ items, id }) => {
  return (
    <AnimationContainer
      className="flex w-full   flex-col  items-center gap-10 md:items-start lg:gap-16"
      id={id}
    >
      <div className="flex w-full items-center  flex-col gap-16 2xl:gap-2  xl:gap-2 lg:gap-4  sm:gap-8 md:gap-4  ">
        {items.map((el, i) => (
          <Accordion question={el.Question} answer={el.Answer} key={i} />
        ))}
      </div>
    </AnimationContainer>
  );
};
