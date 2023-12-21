import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { image } from "@/theme";
import { headerContainerZIndex } from "@/constants/zIndex";
import { useUserContext } from "@/context/AuthContext";
import { IsDefault, IsDesktop, mq } from "@/lib/react-responsive/mediaQuery";

const HeaderContainer = styled.header(({ theme, active }) => ({
  position: "fixed",
  zIndex: headerContainerZIndex,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100vw",
  height: "6rem",
  padding: "0 2rem",
  borderBottom: `1px solid ${theme.color.opacityWhite20}`,
  background: active ? theme.color.primary : "transparent",
  transition: "background 0.3s",

  [mq("desktop")]: {
    height: "10rem",
    padding: "0 4rem",
  },
}));

const MobileMenuContainer = styled.div(({ theme, active }) => ({
  position: "fixed",
  background: theme.color.primary,
  width: "100vw",
  height: "calc(100vh - 6rem)",
  bottom: 0,
  left: active ? 0 : "100vw",
  transition: "all 0.3s",
  zIndex: headerContainerZIndex,
}));

const MobileMenuWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12rem 0",
  justifyContent: "flex-end",
  height: "100%",
  padding: "0 0 8rem 3rem",
}));

const HeaderLanguageContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  color: "white",
  fontSize: "1.6rem",
  gap: "0 1.2rem",
  whiteSpace: "nowrap",
}));

const HamburgerButton = styled.div(() => ({
  position: "relative",
  width: "1rem",
  height: "1.2rem",
  transition: "all 0.3s",
  cursor: "pointer",
  padding: "0.6rem 1.4rem 0.6rem 1.4rem",
}));

const HamburgerLine = styled.img(({ top = 0, opacity = 1, rotate }) => ({
  position: "absolute",
  display: "block",
  width: "100%",
  height: "2px",
  transition: "transform 0.3s",
  right: 0,
  top: top,
  opacity: opacity,
  transform: rotate,
}));

const HeaderLogo = styled.img(() => ({
  width: "12rem",

  [mq("tablet")]: {
    width: "15rem",
  },

  [mq("desktop")]: {
    width: "20rem",
  },
}));

const Header = () => {
  const { isAuthenticated, logoutUser } = useUserContext();

  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [active, setActive] = useState(false);

  const menuModalHandler = useCallback(
    () => setActive((prev) => !prev),
    [setActive]
  );

  const logout = useCallback(() => {
    logoutUser();

    navigate("/");
  }, [logoutUser, navigate]);

  return (
    <HeaderContainer active={active}>
      <Link to={isAuthenticated ? "/need" : "/"}>
        <HeaderLogo
          src={image.whiteLogo.default}
          type=""
          width={isDesktop ? 200 : 100}
        />
      </Link>

      <IsDesktop>
        <HeaderLanguageContainer>
          {isAuthenticated ? (
            <Flex gap="small">
              <Link to="/account">내 프로필</Link>

              <button onClick={logout}>로그아웃</button>
            </Flex>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </HeaderLanguageContainer>
      </IsDesktop>

      <IsDefault>
        <HamburgerButton onClick={menuModalHandler}>
          <HamburgerLine
            src={image.hamburgerLine.default}
            alt=""
            active={active}
            opacity={active ? 0 : 1}
          />

          <HamburgerLine
            src={image.hamburgerLine.default}
            alt=""
            active={active}
            top="50%"
            opacity={1}
            rotate={active ? "rotate(45deg)" : "0"}
          />

          <HamburgerLine
            src={image.hamburgerLine.default}
            alt=""
            active={active}
            top={active ? "50%" : "100%"}
            opacity={1}
            rotate={active ? "rotate(-45deg)" : "0"}
          />
        </HamburgerButton>
      </IsDefault>

      <MobileMenuContainer active={active}>
        <MobileMenuWrapper>
          <HeaderLanguageContainer>
            {isAuthenticated ? (
              <Flex gap="small">
                <Link to="/account">내 프로필</Link>

                <button onClick={logout}>로그아웃</button>
              </Flex>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </HeaderLanguageContainer>
        </MobileMenuWrapper>
      </MobileMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
