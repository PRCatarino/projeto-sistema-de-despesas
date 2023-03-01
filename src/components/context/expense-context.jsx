import { createContext, useState } from "react";

export const expenseContext = createContext({});

export function ExpenseProvider({ children }) {
  const [expense, setExpense] = useState([]);
  return (
    <expenseContext.Provider value={{ expense, setExpense }}>
      {children}
    </expenseContext.Provider>
  );
}

export default ExpenseProvider;