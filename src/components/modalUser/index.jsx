import "./style.css";
import { useRef, useContext, useEffect } from "react";
import { userContext } from "../context/user-context";
import { CreateUsers } from "../services/users.services";

export default function FormModalUser(props) {
  const inputName = useRef(null);
  const inputLastName = useRef(null);
  const inputEmail = useRef(null);
  const { fetchUsers } = useContext(userContext);
  const handleSubmit = () => {
    const body = {
      name: inputName.current.value,
      lastName: inputLastName.current.value,
      email: inputEmail.current.value,
    };
    CreateUsers(body);
    fetchUsers();
  };
  

  return (
    <div>
      <form className="form-modal">
        <div>
          <h3>ADICIONAR USUARIO</h3>
        </div>
        <br />
        <label htmlFor="">Nome</label>
        <input ref={inputName} type="text" />
        <br />
        <label htmlFor="">Sobrenome</label>
        <input ref={inputLastName} type="text" />
        <br />
        <label htmlFor="">Email</label>
        <input ref={inputEmail} type="text" />
        <br />
        <div className="btn-modal">
          <button
            type="button"
            className="modal-close save"
            onClick={() => handleSubmit()}
          >
            SALVAR
          </button>
          <button
            type="button"
            className="modal-close cancel"
            onClick={() => props.onClose()}
          >
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  );
}
