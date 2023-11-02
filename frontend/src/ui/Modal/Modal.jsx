// React & Libraries
import { createPortal } from "react-dom";

// Styles
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

// UI Components
import { Backdrop } from "../index";

function ModalOverlay({
  className,
  style,
  headerClass,
  header,
  onSubmit,
  contentClass,
  children,
  footerClass,
  footer,
}) {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>

      <form onSubmit={onSubmit ? onSubmit : event => event.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );

  return createPortal(content, document.getElementById("modal-hook"));
}

function Modal(props) {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
}

export default Modal;
