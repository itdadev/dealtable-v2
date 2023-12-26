import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

const FadeToRight = ({ active, children }) => {
  const [springs, api] = useSpring(() => ({
    from: { x: -400 },
  }));

  useEffect(() => {
    if (active) {
      api.start({
        from: {
          x: -400,
          opacity: 0,
        },
        to: {
          x: 0,
          opacity: 1,
        },
        config: { duration: 1500 },
      });
    }
  }, [active, api]);

  return (
    <animated.header
      style={{
        ...springs,
      }}
    >
      {children}
    </animated.header>
  );
};

export default FadeToRight;
