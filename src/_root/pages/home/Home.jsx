import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper/modules";
import autoAnimate from "@formkit/auto-animate";
import { image } from "@/theme";

import { GoDownArrow, NormalOverlay } from "@/components/ui";
import { borderZIndex } from "@/constants/zIndex";
import { IsDesktop, mq } from "@/lib/react-responsive/mediaQuery";
import { FadeInOut } from "@/lib/react-transition-group/FadeInOut";

import {
  HomeDifferent,
  HomeEasy,
  HomeMembers,
  HomeProfessional,
  HomeSecurity,
  HomeService,
  HomeStart,
  MainBanner,
} from ".";

export const BackgroundImageWrapper = styled.div(({ url }) => ({
  position: "relative",
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${url})`,
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  [mq("desktop")]: {
    maxHeight: "100vh",
    overflow: "hidden",
  },
}));

export const HomeSectionTextContainer = styled.div(({ theme, home }) => ({
  position: "absolute",
  zIndex: borderZIndex,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "0.6rem 0",

  width: "100%",
  maxWidth: "calc(100% - 4rem)",
  height: "100%",
  maxHeight: "calc(100% - 6rem)",
  margin: "0 2rem",
  paddingTop: home ? "16rem" : 0,
  borderRight: home ? `1px solid ${theme.color.opacityWhite20}` : "none",
  borderLeft: home ? `1px solid ${theme.color.opacityWhite20}` : "none",

  [mq("desktop")]: {
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    maxWidth: "92rem",
    maxHeight: "calc(100% - 10rem)",
    margin: 0,
    paddingTop: 0,
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
  width: "fit-content",
  color: "white",

  overflow: "hidden",
  fontSize: "3.2rem",

  header: {
    //Big Header Text
    position: "relative",
    left: "-1.6rem",
    fontSize: "5.4rem",
    fontWeight: theme.fontWeight.extraBold,
    fontFamily: theme.fontFamily.secondary,
  },

  [mq("desktop")]: {
    wordBreak: "keep-all",
    whiteSpace: "nowrap",

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

  hr: {
    width: "100%",
    height: "0.9rem",
    marginTop: "1rem",
    marginBottom: "0.8rem",
    background: "white",
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

export const HomeSectionSmallDesc = styled.p(() => ({
  fontSize: "1.6rem",

  [mq("desktop")]: {
    fontSize: "1.8rem",
  },
}));

export const ButtonWrapper = styled.div(({ smallGap }) => ({
  a: {
    marginTop: smallGap ? "4rem" : "12rem",
  },
}));

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const [swiper, setSwiper] = useState();
  const [currentSliderIdx, setCurrentSliderIdx] = useState(0);

  const homeArr = [
    {
      id: 1,
      contents: <MainBanner swiper={swiper} active={currentSliderIdx === 1} />,
      image: image.mainBanner01,
    },
    {
      id: 2,
      contents: <HomeDifferent active={currentSliderIdx === 1} />,
      image: image.homeSectionBg01,
    },
    {
      id: 3,
      contents: <HomeService active={currentSliderIdx === 1} />,
      image: image.homeSectionBg02,
    },
    {
      id: 4,
      contents: <HomeMembers active={currentSliderIdx === 1} />,
      image: image.homeSectionBg03,
    },
    {
      id: 5,
      contents: <HomeEasy active={currentSliderIdx === 1} />,
      image: image.homeSectionBg04,
    },
    {
      id: 6,
      contents: <HomeSecurity active={currentSliderIdx === 1} />,
      image: image.homeSectionBg05,
    },
    {
      id: 7,
      contents: <HomeProfessional active={currentSliderIdx === 1} />,
      image: image.homeSectionBg06,
    },
    {
      id: 8,
      contents: <HomeStart active={currentSliderIdx === 1} />,
      image: image.homeSectionBg07,
    },
  ];

  useEffect(() => {
    if (swiper && swiper?.realIndex === 7) {
      swiper?.autoplay.stop();

      return;
    }

    swiper?.autoplay.start();
  }, [swiper, swiper?.realIndex]);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <IsDesktop>
          <FadeInOut in={currentSliderIdx !== 0 && currentSliderIdx !== 6}>
            <GoDownArrow fixed swiper={swiper} idx={currentSliderIdx + 1} />
          </FadeInOut>
        </IsDesktop>

        <Swiper
          keyboard={{ enabled: true }}
          pagination={{
            enabled: isDesktop,
            clickable: isDesktop,
          }}
          loop={false}
          autoplay={{ delay: 5000 }}
          onSwiper={setSwiper}
          onResize={setSwiper}
          speed={1000}
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
          {homeArr.map((section) => {
            return (
              <SwiperSlide key={section.id}>
                <BackgroundImageWrapper url={section.image} className="section">
                  <HomeSectionTextContainer home>
                    {section.contents}
                  </HomeSectionTextContainer>

                  <NormalOverlay />
                </BackgroundImageWrapper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
