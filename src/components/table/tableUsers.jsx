import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/user-context";
import { getTotalExpenseByStatus } from "../services/expense.service";
import Table from "./table";

function TableUsers() {
  const { users, fetchUsers } = useContext(userContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    let usersMap = []
    console.log(users)
    if(users){
      users.map((user) => {
        return {
          ...user,
          pago: getTotalExpenseByStatus(user._expenses, "PAGO"),
          pendente: getTotalExpenseByStatus(user._expenses, "PENDENTE"),
        };
      }) || [];
    }
    setData(usersMap);
  },[users])


  return (
    <Table
      data={data}
      fields={[
        {
          label: "Id",
          key: "id",
        },
        {
          label: "Usuario",
          action: (user) => <Link to={`/users/${user.id}`}>{user.email}</Link>,
          key: "email",
        },
        {
          label: "Pago",
          key: "pago",
        },
        {
          label: "Pendente",
          key: "pendente",
        },
      ]}
    />
  );
}

export default TableUsers;