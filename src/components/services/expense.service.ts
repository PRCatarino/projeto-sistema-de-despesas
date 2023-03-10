export async function Create(body) {
    fetch("http://localhost:3000/expenses",{
      method:'POST',
      body:JSON.stringify(body),
      headers: {"Content-Type": "application/json"},
    }).then((response) => response.json())
}

export async function List() {
  return fetch("http://localhost:3000/expenses",{
    method:'GET',
  }).then((response) => response.json())
}

export function getTotalExpense(expenses) {
  const total = expenses.reduce(
    (currentTotal, expense) => currentTotal + expense.amount,
    0
  );
  return total;
}

export function getTotalExpenseByStatus(expenses, status) {
  const expensesFiltered = expenses.filter(
    (expense) => expense.status === status
  );
  const total = getTotalExpense(expensesFiltered);
  return total;
}