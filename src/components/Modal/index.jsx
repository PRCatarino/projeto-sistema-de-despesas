function Modal({ children, isOpen }) {
  if (!isOpen) return null;
  
  return (
    <>
      {isOpen && (
        <div className="modalContainer">
          <div className="modal">
                {children}
          </div> 
        </div>
      )}
    </>
  );
}

export default Modal;