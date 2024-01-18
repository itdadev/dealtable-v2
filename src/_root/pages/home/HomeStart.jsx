import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";

import { image } from "@/theme";
import { BorderButton } from "@/components/ui/buttons";
import { StartText } from "@/util/language-setting/texts/TranslatedTexts";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled.div(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "8rem 0",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100svh - 24.8rem)",
  top: "-10rem",

  [mq("desktop")]: {
    minHeight: "calc(100svh - 28.8rem)",
    top: "10rem",
  },
}));

const HomeStart = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container>
      <object data={image.whiteLogo.default} height={isDesktop ? 95 : 30}>
        Dealtable
      </object>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </Container>
  );
};

export default HomeStart;
