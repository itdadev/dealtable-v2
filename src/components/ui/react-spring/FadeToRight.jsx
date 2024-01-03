import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

const FadeToRight = ({ active, children }) => {
  const [springs, api] = useSpring(() => ({
    from: { x: -400, opacity: 0 },
  }));

  useEffect(() => {
    if (active) {
      api.start({
        from: {
          x: -400,
          opacity: 0,
        },
        to: async (next) => {
          await next({
            x: 30,
            opacity: 0.5,
            config: { duration: 1000 },
          });
          await next({
            x: 0,
            opacity: 1,
            config: { duration: 500 },
          });
        },
        config: { duration: 1000 },
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
