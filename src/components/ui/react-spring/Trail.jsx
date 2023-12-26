import React from "react";
import { useTrail, a } from "@react-spring/web";
import styled from "@emotion/styled";

const Container = styled(a.div)(() => ({
  position: "relative",
  width: "150%",
  height: "3rem",
  lineHeight: "3rem",
  letterSpacing: "-0.02em",
  willChange: "transform, opacity",
  overflow: "hidden",

  div: {
    overflow: "hidden",
  },
}));

const Trail = ({ active, children }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 2500, friction: 500 },
    opacity: active ? 1 : 0,
    x: active ? 0 : 50,
    height: active ? 30 : 0,
    from: { opacity: 0, x: 0, height: 0 },
    delay: 1000,
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

export default Trail;
