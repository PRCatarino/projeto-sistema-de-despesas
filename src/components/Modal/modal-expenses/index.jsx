import { useState } from "react";
import "./style.css";

function Modal({ children, isOpen, setIsOpen }) {
  if (!isOpen) return null;
  return (
    <div className="container">
      <div className="modal">
        <form className="form-modal">
          <div>
            <h3>ADICIONAR DESPESA</h3>
          </div>
          <br />
          <label htmlFor="">Categoria</label>
          <input type="text" />
          <br />
          <label htmlFor="">Usuario</label>
          <input type="text" />
          <br />
          <label htmlFor="">Valor</label>
          <input type="text" />
          <br />
          <div className="btn-modal">
            <button type="button" className="modal-close save" onClick={() => setIsOpen(false)}>SALVAR</button>
            <button type="button" className="modal-close cancel" onClick={() => setIsOpen(false)}>CANCELAR</button>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
}

export default Modal;
