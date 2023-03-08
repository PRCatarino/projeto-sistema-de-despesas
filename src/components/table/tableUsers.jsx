import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/user-context";
import Table from "./table";

function TableUsers() {
  const {users, setUsers, fetchUsers} = useContext(userContext);
  const usersMap = users.map((user) => {
    return {...user, pago:0, pendente: 0} 
  })
  useEffect(() => {
    fetchUsers()
  },[])

  return (
    <Table data={usersMap} fields={[{
      label: 'Id',
      key:'id'
    },
    {
      label: 'Usuario',
      key: 'email'
    },
    {
      label:'Pago',
      key:'pago'
    },
    {
      label:'Pendente',
      key:'pendente'
    }]}/>
  );
}

export default TableUsers;
