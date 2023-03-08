import { useEffect, useState } from "react";
import "./style.css";
import { Create } from "../services/expense.service";
import { useRef, useContext } from "react";
import { ListCategories } from "../services/categories.services";
import { ListUsers } from "../services/users.services";
import { expenseContext } from "../context/expense-context";
import Modal from "../Modal";

export default function ExpensesModal(props) {
  const inputCategory = useRef(null);
  const inputUser = useRef(null);
  const inputAmount = useRef(null);
  const inputName = useRef(null);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const { fetchExpenses } = useContext(expenseContext);

  const handleSubmit = () => {
    const body = {
      name: inputName.current.value,
      categoryID: inputCategory.current.value,
      userID: inputUser.current.value,
      amount: inputAmount.current.value,
      status: "PENDENTE",
    };
    Create(body);
    fetchExpenses();
  };

  useEffect(() => {
    ListCategories().then((res) => {
      setCategories(res);
    });
    ListUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <div className="container">
      <div className="modal">
        <form className="form-modal">
          <div>
            <h3>ADICIONAR DESPESA</h3>
          </div>
          <br />
          <label htmlFor="">Nome</label>
          <input ref={inputName} type="text" />
          <br />
          <label htmlFor="">Categoria</label>
          <select ref={inputCategory} name="" id="">
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
          <br />
          <label htmlFor="">Usuario</label>
          <select ref={inputUser}>
            {users.map((user) => (
              <option value={user.id}>{user.name}</option>
            ))}
          </select>
          <br />
          <label htmlFor="">Valor</label>
          <input ref={inputAmount} type="text" />
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
    </div>
  );
}
