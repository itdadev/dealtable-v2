import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import { Keyboard, Mousewheel } from "swiper/modules";

import { image } from "@/theme";
import { GoDownArrow, NormalOverlay } from "@/components/ui";
import { Footer } from "@/components/shared";
import { borderZIndex } from "@/constants/zIndex";

import {
  HomeDifferent,
  HomeEasy,
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
  maxHeight: "100vh",
  overflow: "hidden",
  backgroundImage: `url(${url})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
}));

export const HomeSectionTextContainer = styled.div(({ theme }) => ({
  position: "absolute",
  left: "50%",
  bottom: 0,
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "92rem",
  paddingTop: "5%",
  borderRight: `1px solid ${theme.color.opacityWhite20}`,
  borderLeft: `1px solid ${theme.color.opacityWhite20}`,
  height: "100%",
  maxHeight: "calc(100% - 10rem)",
  zIndex: borderZIndex,

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
}));

export const HomeSectionTextWrapper = styled.div(({ theme }) => ({
  position: "relative",
  width: "fit-content",
  color: "white",
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  overflow: "hidden",
  fontSize: "3.2rem",

  header: {
    //Big Header Text
    position: "relative",
    left: "-4rem",
    fontSize: "14rem",
    fontWeight: theme.fontWeight.extraBold,
  },
}));

export const HomeSectionDescContainer = styled.div(() => ({
  fontSize: "3.2rem",
  color: "white",
  lineHeight: 1.5,
}));

const Home = () => {
  const [swiper, setSwiper] = useState();
  const [currentSliderIdx, setCurrentSliderIdx] = useState(0);

  const homeArr = [
    {
      id: 1,
      contents: <MainBanner swiper={swiper} />,
      image: image.mainBanner01,
    },
    {
      id: 2,
      contents: <HomeDifferent />,
      image: image.homeSectionBg01,
    },
    {
      id: 3,
      contents: <HomeService />,
      image: image.homeSectionBg02,
    },
    {
      id: 4,
      contents: <HomeEasy />,
      image: image.homeSectionBg03,
    },
    {
      id: 5,
      contents: <HomeSecurity />,
      image: image.homeSectionBg04,
    },
    {
      id: 6,
      contents: <HomeProfessional />,
      image: image.homeSectionBg05,
    },
    {
      id: 7,
      contents: <HomeStart />,
      image: image.homeSectionBg06,
    },
  ];

  return (
    <div style={{ height: "100vh" }}>
      {currentSliderIdx !== 0 && (
        <GoDownArrow fixed swiper={swiper} idx={currentSliderIdx + 1} />
      )}

      <Swiper
        keyboard={{ enabled: true }}
        onSwiper={setSwiper}
        speed={1000}
        mousewheel={true}
        slidesPerView="1"
        direction={"vertical"}
        autoHeight={true}
        modules={[Mousewheel, Keyboard]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setCurrentSliderIdx(swiper.realIndex);
        }}
      >
        {homeArr.map((section) => {
          return (
            <SwiperSlide key={section.id}>
              <BackgroundImageWrapper url={section.image} className="section">
                <HomeSectionTextContainer>
                  {section.contents}
                </HomeSectionTextContainer>

                <NormalOverlay />
              </BackgroundImageWrapper>
            </SwiperSlide>
          );
        })}

        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
