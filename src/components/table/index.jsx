import { useContext, useEffect, useState } from "react";
import { expenseContext } from "../context/expense-context";
import "./expenseTable.css";

function TableExpense() {
  // GetService
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/expenses")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  //PutService

  return (
    <div className="table-expense">
      <div className="table-header">
        <div>ID</div>
        <div>Usuário</div>
        <div>Despesa</div>
        <div>Status</div>
      </div>
      <div className="table-data">
        {data.map((item) => (
          <>
            <div name="id" value="id">
              {item.id}
            </div>
            <div name="userID" value="userID">
              <a href="#">{item._user.email}</a>
            </div>
            <div name="amount" value="amount">
              {item.amount}
            </div>
            <div name="status" value="status">
              {item.status}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default TableExpense;
