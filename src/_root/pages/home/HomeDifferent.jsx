import React from "react";

import { BorderButton } from "@/components/ui/buttons";
import {
  Home1Text1,
  Home1Text2,
  Home1Text3,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
} from "./Home";

const HomeDifferent = ({ active }) => {
  // const [springs, api] = useSpring(() => ({
  //   from: { x: -1000 },
  // }));

  // useEffect(() => {
  //   if (active) {
  //     api.start({
  //       from: {
  //         x: -1000,
  //       },
  //       to: {
  //         x: 0,
  //       },
  //       config: { duration: 1200 },
  //     });
  //   }
  // }, [active, api]);

  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        {/* <animated.header
          style={{
            ...springs,
          }}
        >
          Different
        </animated.header> */}

        <header>Different</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>
          <Home1Text1 />
        </div>

        <div>
          <Home1Text2 />
        </div>

        <div>
          <Home1Text3 />
        </div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeDifferent;
