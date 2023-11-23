import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import { Keyboard, Mousewheel, Pagination } from "swiper/modules";
import autoAnimate from "@formkit/auto-animate";
import { FadeInOut } from "@/lib/react-transition-group/FadeInOut";

import { image } from "@/theme";
import { GoDownArrow, NormalOverlay } from "@/components/ui";
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
import { Header } from "@/components/shared";

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
  borderRight: `1px solid ${theme.color.opacityWhite20}`,
  borderLeft: `1px solid ${theme.color.opacityWhite20}`,
  height: "100%",
  maxHeight: "calc(100% - 10rem)",
  zIndex: borderZIndex,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",

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

export const HomeSectionDescWithLine = styled.div(() => ({
  display: "flex",
  gap: "0 2rem",
  marginTop: "8rem",
  fontSize: "3.2rem",
  color: "white",
  lineHeight: 1.5,

  hr: {
    minWidth: "44rem",
    height: "1.4rem",
    marginTop: "1rem",
    background: "white",
  },
}));

export const HomeSectionSmallDesc = styled.p(() => ({
  fontSize: "1.8rem",
}));

const Home = () => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

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
    <>
      <Header />

      <div style={{ height: "100vh" }}>
        <FadeInOut in={currentSliderIdx !== 0 && currentSliderIdx !== 6}>
          <GoDownArrow fixed swiper={swiper} idx={currentSliderIdx + 1} />
        </FadeInOut>

        <Swiper
          keyboard={{ enabled: true }}
          pagination={{
            enabled: true,
            clickable: true,
          }}
          onSwiper={setSwiper}
          speed={1000}
          mousewheel={true}
          slidesPerView="1"
          direction={"vertical"}
          autoHeight={true}
          modules={[Mousewheel, Keyboard, Pagination]}
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
        </Swiper>
      </div>
    </>
  );
};

export default Home;
