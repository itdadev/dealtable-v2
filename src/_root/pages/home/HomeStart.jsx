import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";

import { image } from "@/theme";
import { BorderButton } from "@/components/ui/buttons";
import { StartText } from "@/util/language-setting/texts/TranslatedTexts";

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8rem 0",
  alignItems: "center",
  justifyContent: "center",
}));

const HomeStart = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <Container>
      <object
        data={image.whiteLogo.default}
        alt=""
        height={isDesktop ? 95 : 30}
      >
        Dealtable
      </object>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </Container>
  );
};

export default HomeStart;
