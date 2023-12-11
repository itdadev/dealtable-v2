import React from "react";
import styled from "@emotion/styled";
import {
  BackgroundImageWrapper,
  HomeSectionTextContainer,
} from "@/_root/pages/home/Home";

import { image } from "@/theme";
import { contentZIndex } from "@/constants/zIndex";
import { mq } from "@/lib/react-responsive/mediaQuery";

import { NormalOverlay } from "..";
import { Link } from "react-router-dom";

const FormContainer = styled.div(({ width = "100rem" }) => ({
  position: "relative",
  zIndex: contentZIndex,
  width: "100%",
  maxWidth: "90%",
  margin: "0 auto",

  [mq("tablet")]: {
    maxWidth: "80%",
  },

  [mq("desktop")]: {
    minWidth: "48rem",
    maxWidth: width,
  },
}));

export const FormDescription = styled.p(() => ({
  fontSize: "2.4rem",
  marginBottom: "2.2rem",
}));

const Container = styled.form(({ theme, wide }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
  maxWidth: wide ? "92rem" : "60rem",
  margin: "8rem auto",
  padding: `6.4rem 4.8rem`,
  boxShadow: theme.shadow.primary,
  background: "white",
  maxHeight: "calc(100vh - 25rem)",
  overflow: "auto",

  "& > *": {
    width: "100%",
  },
}));

export const FieldContainer = styled.div(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem 0",
  width: "100%",
  minHeight: "10rem",

  label: {
    fontSize: "1.6rem",

    sup: {
      color: theme.color.error,
      marginLeft: "0.2rem",
    },
  },
}));

export const TextAresFieldContainer = styled.div(() => ({
  minHeight: "15rem",
  width: "100%",
  maxWidth: "58rem",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem 0",
}));

export const FieldErrorMessage = styled.div(({ theme, custom }) => ({
  color: theme.color.error,
  fontWeight: theme.fontWeight.medium,
  fontSize: "1.2rem",

  ...custom,
}));

export const FieldGroup = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "6rem",

  header: {
    marginBottom: "2.4rem",
    fontSize: "2.4rem",
  },
}));

export const FormTitle = styled.h1(({ theme }) => ({
  position: "relative",
  marginBottom: "6rem",
  textAlign: "center",
  fontSize: "2.4rem",

  p: {
    position: "absolute",
    right: 0,
    fontSize: "1.4rem",
    fontWeight: theme.fontWeight.regular,
  },
}));

const LinkToHome = styled(Link)(() => ({
  marginBottom: "2.2rem",
}));

const CustomForm = ({ children, submitEvent, width, wide }) => {
  return (
    <BackgroundImageWrapper url={image.homeSectionBg06}>
      <NormalOverlay />

      <HomeSectionTextContainer>
        <FormContainer width={width}>
          <Container onSubmit={submitEvent} wide={wide}>
            <LinkToHome to="/">
              <img src={image.basicLogo.default} alt="DEALTABLE" width={150} />
            </LinkToHome>

            {children}
          </Container>
        </FormContainer>
      </HomeSectionTextContainer>
    </BackgroundImageWrapper>
  );
};

export default CustomForm;
