import "./style.css";
function Modal({ children, isOpen }) {
  if (!isOpen) return null;
  
  return (
    <>
      {isOpen && (
        <div className="container">
          <div className="modal">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;