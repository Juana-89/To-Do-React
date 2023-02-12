import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div
      className="d-flex justify-content-center align-items-center color-white bg-dark bg-opacity-75 position-fixed top-0 start-0 bottom-0 end-0"
    >
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
