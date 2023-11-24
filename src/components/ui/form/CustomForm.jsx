import React from "react";
import styled from "@emotion/styled";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled.form(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  maxWidth: "100%",
  margin: "8rem auto",
  padding: "4rem 1.6rem",

  "&>*": {
    width: "100%",
  },

  [mq("tablet")]: {
    maxWidth: "90vw",
  },

  [mq("desktop")]: {
    maxWidth: "40vw",
  },
}));

export const FieldContainer = styled.div(() => ({
  minHeight: "6.4rem",
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem 0",
}));

export const TextAresFieldContainer = styled.div(() => ({
  minHeight: "13rem",
  width: "100%",
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

const CustomForm = ({ children, submitEvent }) => {
  return <Container onSubmit={submitEvent}>{children}</Container>;
};

export default CustomForm;
