import { useEffect, useState } from "react";
import './expenseTable.css';

function TableExpense() {
  const [id, SetId] = useState('');
  const [user, setUser] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/expenses")
    .then((response) => response.json())
    .then((data) => setData(data))
  },[])

  return (
    <div className="table-expense">
      <div className="table-header">
          <div>ID</div>
          <div>Usuário</div>
          <div>Despesa</div>
          <div>Status</div>
      </div>
      <div className="table-data">
          <div name="id">01</div>
          <div>guilherme@gmail.com</div>
          <div>R$ 100,00</div>
          <div>PAGO</div>
      </div>
      <div className="div-btn-table">
        <button type="button" className="btn-table">
          ADICIONAR DESPESA
        </button>
      </div>
    </div>
  );
}

export default TableExpense;
