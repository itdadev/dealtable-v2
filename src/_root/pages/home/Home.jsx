import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper/modules";

import { image } from "@/theme";
import { GoDownArrow, NormalOverlay } from "@/components/ui";
import { Footer } from "@/components/shared";
import { borderZIndex } from "@/constants/zIndex";
import { mq, mqx } from "@/lib/react-responsive/mediaQuery";
import { FadeInOut } from "@/lib/react-transition-group/FadeInOut";
import { notification } from "antd";

import {
  HomeDifferent,
  HomeEasy,
  HomeProfessional,
  HomeSecurity,
  HomeService,
  HomeStart,
  MainBanner,
} from ".";
import { FloatImageButton } from "@/components/ui/buttons";

export const BackgroundImageWrapper = styled.div(({ url, isFooter }) => ({
  position: "relative",
  width: "100vw",
  height: isFooter ? "calc(100vh - 18.8rem)" : "100vh",
  backgroundImage: `url(${url})`,
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto 100%",
  backgroundPosition: "60% top",
  transition: "all 0.3s",

  [mq("desktop")]: {
    maxHeight: "100vh",
    overflow: "hidden",
    backgroundSize: "cover",
  },
}));

export const HomeSectionTextContainer = styled.div(({ theme, home }) => ({
  position: "absolute",
  zIndex: borderZIndex,
  top: "6rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.6rem 0",
  width: "100%",
  maxWidth: "calc(100% - 4rem)",
  minHeight: "calc(100svh - 6rem)",
  maxHeight: "calc(100svh - 6rem)",
  margin: "0 2rem",
  borderRight: home ? `1px solid ${theme.color.opacityWhite20}` : "none",
  borderLeft: home ? `1px solid ${theme.color.opacityWhite20}` : "none",
  padding: "2rem 0",

  [mq("desktop")]: {
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    maxWidth: "92rem",
    minHeight: "calc(100svh - 10rem)",
    maxHeight: "calc(100% - 10rem)",
    margin: 0,
    paddingTop: 0,
    top: "auto",
    bottom: 0,
    gap: 0,
    borderRight: `1px solid ${theme.color.opacityWhite20}`,
    borderLeft: `1px solid ${theme.color.opacityWhite20}`,

    ":after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "0.01rem",
      background: theme.color.opacityWhite20,
      height: "100%",
      zIndex: borderZIndex,
    },
  },
}));

export const HomeSectionTextWrapper = styled.div(({ theme }) => ({
  position: "relative",
  color: "white",
  overflow: "hidden",
  fontSize: "3.2rem",
  width: "100%",

  header: {
    //Big Header Text
    position: "relative",
    left: "-1.5rem",
    fontSize: "5.4rem",
    fontWeight: theme.fontWeight.extraBold,
    fontFamily: theme.fontFamily.secondary,
  },

  [mqx("mini")]: {
    header: {
      fontSize: "4.2rem",
    },
  },

  [mq("desktop")]: {
    wordBreak: "keep-all",
    whiteSpace: "nowrap",
    width: "fit-content",

    header: {
      left: "-4rem",
      fontSize: "12rem",
    },
  },
}));

export const HomeSectionDescContainer = styled.div(() => ({
  fontSize: "1.6rem",
  color: "white",
  lineHeight: 1.5,
  marginTop: "2rem",

  [mqx("mini")]: {
    fontSize: "1.4rem",
  },

  [mq("desktop")]: {
    fontSize: "2.4rem",
  },
}));

export const HomeSectionDescWithLine = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0 2rem",
  marginTop: "3.2rem",
  fontSize: "1.6rem",
  color: "white",
  lineHeight: 1.5,
  wordWrap: "wrap",

  hr: {
    width: "100%",
    height: "0.9rem",
    marginTop: "1rem",
    marginBottom: "0.8rem",
    background: "white",
  },

  [mqx("mini")]: {
    fontSize: "1.4rem",
  },

  [mq("desktop")]: {
    flexDirection: "row",
    marginTop: "8rem",
    fontSize: "2.4rem",

    hr: {
      maxWidth: "44rem",
      height: "1.4rem",
      marginTop: "1rem",
      marginBottom: 0,
      background: "white",
    },
  },
}));

export const HomeSectionSmallDesc = styled.div(() => ({
  fontSize: "1.6rem",

  [mq("desktop")]: {
    fontSize: "1.8rem",
  },
}));

export const ButtonWrapper = styled.div(() => ({
  marginBottom: "20rem",
  minHeight: "26rem",
}));

export const StartButton = styled.div(() => ({
  position: "absolute",
  bottom: "30%",

  [mq("desktop")]: {
    bottom: "15rem",
  },
}));

const Home = () => {
  const { state } = useLocation();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [swiper, setSwiper] = useState();
  const [currentSliderIdx, setCurrentSliderIdx] = useState(0);

  const homeArr = [
    {
      id: 1,
      contents: <MainBanner swiper={swiper} active={currentSliderIdx === 0} />,
      image: image.mainBanner01,
    },
    {
      id: 2,
      contents: <HomeDifferent active={currentSliderIdx === 1} />,
      image: image.homeSectionBg01,
    },
    {
      id: 3,
      contents: <HomeService active={currentSliderIdx === 2} />,
      image: image.homeSectionBg02,
    },
    {
      id: 4,
      contents: <HomeEasy active={currentSliderIdx === 3} />,
      image: image.homeSectionBg04,
    },
    {
      id: 5,
      contents: <HomeSecurity active={currentSliderIdx === 4} />,
      image: image.homeSectionBg05,
    },
    {
      id: 6,
      contents: <HomeProfessional active={currentSliderIdx === 5} />,
      image: image.homeSectionBg06,
    },
    {
      id: 7,
      contents: <HomeStart active={currentSliderIdx === 6} />,
      image: image.homeSectionBg07,
    },
  ];

  useEffect(() => {
    if (swiper && swiper?.realIndex === 6) {
      swiper?.autoplay.stop();

      return;
    }

    swiper?.autoplay.start();
  }, [swiper, swiper?.realIndex]);

  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (state?.mutateStatus === "deleteAccount") {
      api.success({
        message: "회원 탈퇴가 정상적으로 처리되었습니다.",
        duration: 3,
      });
    }
  }, [state, api]);

  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <FloatImageButton />

        {contextHolder}

        <FadeInOut in={currentSliderIdx !== 0 && currentSliderIdx !== 6}>
          <GoDownArrow fixed swiper={swiper} idx={currentSliderIdx + 1} />
        </FadeInOut>

        <Swiper
          keyboard={{ enabled: true }}
          pagination={{
            enabled: isDesktop,
            clickable: isDesktop,
          }}
          loop={false}
          autoplay={{ delay: 7000 }}
          speed={1000}
          onSwiper={setSwiper}
          onResize={setSwiper}
          mousewheel={true}
          slidesPerView="1"
          direction="vertical"
          autoHeight={true}
          modules={[Mousewheel, Keyboard, Pagination, Autoplay]}
          className="mySwiper"
          parallax
          onSlideChange={(swiper) => {
            setCurrentSliderIdx(swiper.realIndex);
          }}
          onReachEnd={(swiper) => {
            swiper.autoplay.stop();
          }}
        >
          {homeArr.map((section, idx) => {
            return (
              <SwiperSlide key={section.id}>
                <div>
                  <BackgroundImageWrapper
                    isFooter={idx === 6}
                    url={section.image}
                    className="section"
                  >
                    <HomeSectionTextContainer home>
                      {section.contents}
                    </HomeSectionTextContainer>

                    <NormalOverlay />
                  </BackgroundImageWrapper>

                  {idx === 6 && <Footer showFooter />}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
