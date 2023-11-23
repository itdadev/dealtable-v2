import React from "react";

import { image } from "@/theme";
import { BorderButton } from "@/components/ui/buttons";
import styled from "@emotion/styled";

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8rem 0",
  alignItems: "center",
  justifyContent: "center",
}));

const HomeStart = () => {
  return (
    <Container>
      <object data={image.whiteLogo.default} alt="" height={95}>
        Dealtable
      </object>

      <BorderButton linkTo="/login">시작하기</BorderButton>
    </Container>
  );
};

export default HomeStart;
