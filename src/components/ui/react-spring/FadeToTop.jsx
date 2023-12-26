import React from "react";
import { a, useTrail } from "@react-spring/web";
import styled from "@emotion/styled";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled(a.div)(() => ({
  position: "relative",
  width: "150%",
  height: "7rem",
  lineHeight: "7rem",
  letterSpacing: "-0.02em",
  willChange: "transform, opacity",
  overflow: "hidden",

  div: {
    overflow: "hidden",
  },

  [mq("desktop")]: {
    height: "14rem",
    lineHeight: "14rem",
  },
}));
const FadeToTop = ({ active, children }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 2500, friction: 600 },
    opacity: active ? 1 : 0,
    y: active ? 0 : 250,
    from: { opacity: 0, y: 250 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <Container key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </Container>
      ))}
    </div>
  );
};

export default FadeToTop;
