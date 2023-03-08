import { useEffect, useState } from "react";
import "./style.css";
import { Create } from "../services/expense.service";
import { useRef, useContext } from "react";
import { ListCategories } from "../services/categories.services";
import { ListUsers } from "../services/users.services";
import { expenseContext } from "../context/expense-context";
import Modal from "../Modal";

export default function FormModalUser(props) {

    const inputName= useRef(null)
    const inputLastName = useRef(null)
    const inputEmail = useRef(null)
    const {fetchExpenses} = useContext(expenseContext);
    const handleSubmit = () => {
        const body = {
          name: inputName.current.value,
          lastName: inputLastName.current.value,
          email: inputEmail.current.value
        }
        Create(body)
        fetchExpenses()
      }

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
                <br/>
                <div className="btn-modal">
                <button type="button" className="modal-close save" onClick={() => handleSubmit()}>SALVAR</button>
                <button type="button" className="modal-close cancel" onClick={() => props.onClose()}>CANCELAR</button>
                </div>
            </form>
        </div>
    )
}