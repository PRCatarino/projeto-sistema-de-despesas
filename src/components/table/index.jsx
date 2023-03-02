import { useContext, useEffect, useState } from "react";
import { expenseContext } from "../context/expense-context";
import "./expenseTable.css";
import Table from "./table";

function TableExpense() {
  const {expenses, setExpenses, fetchExpenses} = useContext(expenseContext);
  const expensesMap = expenses.map((expense) => {
    return {...expense, userEmail: expense._user.email}
  })
  useEffect(() => {
    fetchExpenses()
  },[])

  return (
    <Table data={expensesMap} fields={[{
      label: 'Id',
      key:'id'
    },
    {
      label: 'Email',
      key: 'userEmail'
    },
    {
      label:'Despesas',
      key:'amount'
    },
    {
      label:'Status',
      key:'status'
    }]}/>
  );
}

export default TableExpense;
