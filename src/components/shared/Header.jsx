import React, { useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Flex } from "antd";

import { image } from "@/theme";
import { headerContainerZIndex } from "@/constants/zIndex";
import { useUserContext } from "@/context/AuthContext";

const HeaderContainer = styled.header(({ theme }) => ({
  position: "fixed",
  zIndex: headerContainerZIndex,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100vw",
  height: "10rem",
  padding: "0 4rem",
  borderBottom: `1px solid ${theme.color.opacityWhite20}`,
}));

const HeaderNavContainer = styled.nav(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  gap: "0 8.8rem",
  width: "100%",
  maxWidth: "92rem",
  color: "white",
  fontSize: "2.4rem",
  fontWeight: theme.fontWeight.regular,
  margin: "0 auto",
}));

const HeaderLanguageContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  color: "white",
  fontSize: "1.6rem",
  gap: "0 1.2rem",
  whiteSpace: "nowrap",
}));

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logoutUser } = useUserContext();

  const navArr = [
    { id: 1, label: "Need", linkTo: "/need" },
    { id: 2, label: "Service", linkTo: "/service" },
    { id: 3, label: "Feature", linkTo: "/feature" },
    { id: 4, label: "Connect", linkTo: "/connect" },
  ];

  const logout = useCallback(() => {
    logoutUser();

    navigate("/login");
  }, [logoutUser, navigate]);

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
        {isAuthenticated ? (
          <Flex gap="small">
            <Link to="/account">내 프로필</Link>

            <button onClick={logout}>로그아웃</button>
          </Flex>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </HeaderLanguageContainer>
    </HeaderContainer>
  );
};

export default Header;
