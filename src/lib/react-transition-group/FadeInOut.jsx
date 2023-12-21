import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

const defaultStyle = {
  transition: `all 0.6s ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export function FadeInOut({ in: inProp, children }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
      in={inProp}
      classNames="fadeInOut"
      timeout={{
        appear: 200,
        enter: 500,
        exit: 100,
      }}
    >
      {(state) => {
        return (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        );
      }}
    </CSSTransition>
  );
}
