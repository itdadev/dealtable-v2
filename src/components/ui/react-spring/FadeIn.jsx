import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

const FadeIn = ({ active, children }) => {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0 },
  }));

  useEffect(() => {
    if (active) {
      api.start({
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
        config: { duration: 1500 },
      });
    } else {
      api.pause();
    }
  }, [active, api]);

  return (
    <animated.div
      style={{
        ...springs,
      }}
    >
      {children}
    </animated.div>
  );
};

export default FadeIn;
