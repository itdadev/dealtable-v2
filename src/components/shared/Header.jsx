import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";

import { image } from "@/theme";
import { headerContainerZIndex } from "@/constants/zIndex";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header(({ theme }) => ({
  position: "fixed",
  zIndex: headerContainerZIndex,
  display: "flex",
  alignItems: "center",
  gap: "0 26rem",
  width: "100vw",
  height: "10rem",
  padding: "0 4rem",
  borderBottom: `1px solid ${theme.color.opacityWhite20}`,
}));

const HeaderNavContainer = styled.nav(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  gap: "0 8.8rem",
  color: "white",
  fontSize: "2.4rem",
  fontWeight: theme.fontWeight.regular,
}));

const HeaderLanguageContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  color: "white",
  fontSize: "1.6rem",
  gap: "0 1.2rem",
}));

const HeaderLanguageItem = styled.button(({ on, theme }) => ({
  color: on === "true" ? "white" : theme.color.inactiveGrey,
  paddingRight: "1.2rem",
  fontWeight: theme.fontWeight.semiBold,

  ":hover": {
    color: "white",
  },

  ":first-of-type": {
    borderRight: `1px solid white`,
  },
}));

const Header = () => {
  const [languageArr, setLanguageArr] = useState([
    { id: 1, label: "KR", active: "true" },
    { id: 2, label: "EN", active: "false" },
  ]);

  const navArr = [
    { id: 1, label: "Need", linkTo: "/need" },
    { id: 2, label: "Service", linkTo: "/service" },
    { id: 3, label: "Feature", linkTo: "/feature" },
    { id: 4, label: "Connect", linkTo: "/connect" },
  ];

  const switchSiteLanguage = useCallback((id) => {
    setLanguageArr((prev) =>
      prev.map((language) =>
        language.id === id
          ? { ...language, active: "true" }
          : { ...language, active: "false" }
      )
    );
  }, []);

  return (
    <HeaderContainer>
      <object data={image.whiteLogo.default} type="" width={200}>
        DEAL TABLE
      </object>

      <HeaderNavContainer>
        {navArr.map((nav) => {
          return (
            <NavLink key={nav.id} to={nav.linkTo}>
              {nav.label}
            </NavLink>
          );
        })}
      </HeaderNavContainer>

      <HeaderLanguageContainer>
        {languageArr.map((language) => {
          return (
            <HeaderLanguageItem
              key={language.id}
              type="button"
              on={language.active}
              onClick={() => switchSiteLanguage(language.id)}
            >
              {language.label}
            </HeaderLanguageItem>
          );
        })}
      </HeaderLanguageContainer>
    </HeaderContainer>
  );
};

export default Header;
