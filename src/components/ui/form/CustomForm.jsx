import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  BackgroundImageWrapper,
  HomeSectionTextContainer,
} from "@/_root/pages/home/Home";

import { image } from "@/theme";
import { contentZIndex } from "@/constants/zIndex";
import { useUserContext } from "@/context/AuthContext";
import { mq } from "@/lib/react-responsive/mediaQuery";
import {
  GoBackText,
  NeedTakeoverText,
} from "@/util/language-setting/texts/TranslatedTexts";

import { NormalOverlay } from "..";

const FormContainer = styled.div(({ width = "100rem" }) => ({
  position: "relative",
  zIndex: contentZIndex,
  margin: "0 auto",
  width: "100%",

  [mq("tablet")]: {
    maxWidth: "80%",
  },

  [mq("desktop")]: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    minWidth: "48rem",
    maxWidth: width,
    overflow: "hidden",
    height: "100%",
    margin: "8rem auto",
  },
}));

export const FormDescription = styled.p(() => ({
  fontSize: "2.2rem",
  marginBottom: "2.2rem",

  [mq("desktop")]: {
    fontSize: "2.4rem",
  },
}));

const Container = styled.form(({ theme, wide, noGoBack }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
  maxHeight: noGoBack ? "calc(100svh - 10rem)" : "calc(100svh - 14rem)",
  margin: "auto",
  padding: "2rem",
  boxShadow: theme.shadow.primary,
  background: "white",
  overflow: "auto",

  "& > *": {
    width: "100%",
  },

  [mq("desktop")]: {
    minWidth: wide ? "92rem" : "60rem",
    maxWidth: wide ? "92rem" : "60rem",
    maxHeight: "calc(100vh - 25rem)",
    padding: "6.4rem 4.8rem",
  },
}));

export const FieldContainer = styled.div(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem 0",
  width: "100%",
  minHeight: "10.4rem",

  label: {
    fontSize: "1.4rem",

    sup: {
      color: theme.color.error,
      marginLeft: "0.2rem",
    },
  },

  [mq("desktop")]: {
    label: {
      fontSize: "1.6rem",
    },
  },
}));

export const TextAresFieldContainer = styled.div(({ theme }) => ({
  minHeight: "18rem",
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem 0",

  label: {
    fontSize: "1.4rem",

    sup: {
      color: theme.color.error,
      marginLeft: "0.2rem",
    },
  },

  [mq("desktop")]: {
    fontSize: "1.6rem",

    label: {
      fontSize: "1.6rem",
    },
  },
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
  marginBottom: "3.6rem",

  header: {
    marginBottom: "1.6rem",
    fontSize: "2rem",
  },

  [mq("desktop")]: {
    marginBottom: "6.4rem",

    header: {
      marginBottom: "2.4rem",
      fontSize: "2.4rem",
    },
  },
}));

export const FormTitle = styled.h1(({ theme }) => ({
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

export const FixedButtonContainer = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "3rem",
  gap: "0 0.8rem",
  background: "white",

  [mq("desktop")]: {
    position: "absolute",
    left: 0,
    bottom: 0,
    marginTop: 0,
    padding: "2.4rem 2rem",
    boxShadow: theme.shadow.secondary,
  },
}));

const LinkToHome = styled(Link)(() => ({
  marginBottom: "2.2rem",
}));

const GotoBack = styled.button(() => ({
  display: "flex",
  marginBottom: "1rem",
  lineHeight: "2.7rem",
  color: "white",
}));

const CustomForm = ({
  children,
  submitEvent,
  width,
  wide,
  noLogo,
  noGoBack,
  back,
}) => {
  const { isAuthenticated } = useUserContext();

  const navigate = useNavigate();

  const goBack = useCallback(() => {
    if (back) {
      navigate(-1);

      return;
    }

    navigate(isAuthenticated ? "/need" : "/");
  }, [back, isAuthenticated, navigate]);

  return (
    <BackgroundImageWrapper url={image.homeSectionBg06}>
      <NormalOverlay />

      <HomeSectionTextContainer>
        <FormContainer width={width}>
          {!noGoBack && (
            <GotoBack onClick={goBack}>
              <img src={image.leftArrowIcon.default} alt="<" />

              <p>{back ? <GoBackText /> : <NeedTakeoverText />}</p>
            </GotoBack>
          )}

          <Container onSubmit={submitEvent} wide={wide} noGoBack={noGoBack}>
            {!noLogo && (
              <LinkToHome to={isAuthenticated ? "/need" : "/"}>
                <img
                  src={image.basicLogo.default}
                  alt="DEALTABLE"
                  width={150}
                />
              </LinkToHome>
            )}

            {children}
          </Container>
        </FormContainer>
      </HomeSectionTextContainer>
    </BackgroundImageWrapper>
  );
};

export default CustomForm;
