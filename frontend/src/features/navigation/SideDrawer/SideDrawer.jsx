// React & Libraries
import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

// Styles
import "./SideDrawer.css";

function SideDrawer({ children, show, onClick }) {
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <aside ref={nodeRef} className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );

  return createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;
