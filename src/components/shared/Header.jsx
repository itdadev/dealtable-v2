import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";
import { Divider, Dropdown, Flex } from "antd";

import { image } from "@/theme";
import { headerContainerZIndex } from "@/constants/zIndex";
import { useUserContext } from "@/context/AuthContext";
import { IsDefault, IsDesktop, mq } from "@/lib/react-responsive/mediaQuery";
import {
  LoginText,
  LogoutText,
  MyProfileText,
  NoticeText,
  SellConsultText,
} from "@/util/language-setting/texts/TranslatedTexts";
import { Space } from "antd/lib";
import { DownOutlined } from "@ant-design/icons";
import { LOCAL_STORAGE_SITE_LANGUAGE } from "@/constants/StorageKey";

const HeaderContainer = styled.header(({ theme, active }) => ({
  position: "absolute",
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
    background: "transparent",
  },
}));

const MobileMenuContainer = styled.div(({ theme, active }) => ({
  position: "fixed",
  background: theme.color.primary,
  width: "100vw",
  height: "calc(100vh - 6rem)",
  top: "6rem",
  left: active ? 0 : "100vw",
  transition: "all 0.3s",
  zIndex: headerContainerZIndex,
}));

const MobileMenuWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12rem 0",
  justifyContent: "space-between",
  height: "100%",
  padding: "8rem 0 8rem 3rem",
  color: "white",
  fontSize: "2.8rem",
  fontWeight: theme.fontWeight.medium,

  button: {
    width: "fit-content",

    "&:hover": {
      color: theme.color.secondary,
    },
  },
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

const LogoutButton = styled.button(({ theme }) => ({
  ":hover": {
    color: theme.color.secondary,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  ":hover": {
    color: theme.color.secondary,
  },
}));

const LangText = styled.button(({ active, theme }) => ({
  color: active ? "white" : theme.color.grey,
}));

const LanguageSwitcher = () => {
  const [isKorean, setIsKorean] = useState(
    localStorage.getItem(LOCAL_STORAGE_SITE_LANGUAGE) === "ko",
  );

  const toggleLanguage = useCallback(() => {
    setIsKorean((prev) => !prev);
    if (isKorean) {
      setIsKorean(false);
      localStorage.setItem(LOCAL_STORAGE_SITE_LANGUAGE, "en-US");
    } else {
      setIsKorean(true);
      localStorage.setItem(LOCAL_STORAGE_SITE_LANGUAGE, "ko");
    }

    window.location.reload();
  }, [isKorean]);

  const LANG_OFF = true;

  return LANG_OFF ? (
    <></>
  ) : (
    <Flex align="center">
      <LangText active={isKorean} onClick={toggleLanguage} type="button">
        KR
      </LangText>

      <Divider
        type="vertical"
        style={{
          borderInlineStart: "1px solid rgba(255, 255, 255, 0.5)",
        }}
      />

      <LangText active={!isKorean} onClick={toggleLanguage} type="button">
        EN
      </LangText>
    </Flex>
  );
};

const Header = () => {
  const { isAuthenticated, logoutUser } = useUserContext();

  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [active, setActive] = useState(false);

  const menuModalHandler = useCallback(
    () => setActive((prev) => !prev),
    [setActive],
  );

  const closeModal = useCallback(() => {
    setActive(false);
  }, []);

  const logout = useCallback(() => {
    logoutUser();

    setActive(false);

    navigate("/");
  }, [logoutUser, navigate]);

  const items = [
    {
      label: (
        <StyledLink to="/notice">
          <NoticeText />
        </StyledLink>
      ),
      key: "1",
    },
    {
      label: <StyledLink to="/faq">FAQ</StyledLink>,
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <StyledLink to="/account">
          <MyProfileText />
        </StyledLink>
      ),
      key: "3",
    },
    {
      label: (
        <LogoutButton type="button" onClick={logout}>
          <LogoutText />
        </LogoutButton>
      ),
      key: "4",
    },
  ];

  const refresh = useCallback(() => {
    navigate(isAuthenticated ? "/need" : "/");

    window.location.reload();
  }, [isAuthenticated, navigate]);

  return (
    <HeaderContainer active={active}>
      <Link to={isAuthenticated ? "/need" : "/"} onClick={refresh}>
        <HeaderLogo
          src={image.whiteLogo.default}
          type=""
          width={isDesktop ? 200 : 100}
        />
      </Link>

      <IsDesktop>
        <HeaderLanguageContainer>
          {isAuthenticated ? (
            <Flex gap="large">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                trigger={["click"]}
              >
                <button type="button" onClick={(e) => e.preventDefault()}>
                  <Space>
                    MY
                    <DownOutlined />
                  </Space>
                </button>
              </Dropdown>
            </Flex>
          ) : (
            <Flex gap="large">
              <LanguageSwitcher />

              <a
                href="https://www.mmp.co.kr/m61.php"
                target="_blank"
                rel="noreferrer"
              >
                <SellConsultText />
              </a>

              <StyledLink to="/login" onClick={closeModal}>
                <LoginText />
              </StyledLink>
            </Flex>
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

      <IsDefault>
        <MobileMenuContainer active={active}>
          <MobileMenuWrapper>
            <Flex vertical gap={24}>
              {isAuthenticated && (
                <>
                  <Link
                    to="/notice"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    <NoticeText />
                  </Link>

                  <Link
                    to="/faq"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    FAQ
                  </Link>

                  <Link to="/account" onClick={closeModal}>
                    <MyProfileText />
                  </Link>
                </>
              )}

              {isAuthenticated ? (
                <button type="button" onClick={logout}>
                  <LogoutText />
                </button>
              ) : (
                <>
                  <a
                    href="https://www.mmp.co.kr/m61.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SellConsultText />
                  </a>

                  <StyledLink to="/login" onClick={closeModal}>
                    <LoginText />
                  </StyledLink>
                </>
              )}

              <LanguageSwitcher />
            </Flex>
          </MobileMenuWrapper>
        </MobileMenuContainer>
      </IsDefault>
    </HeaderContainer>
  );
};

export default Header;
