import { createContext, useState } from "react";
import { ListUsers } from "../services/users.services";

export const userContext = createContext({});

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  function fetchUsers()  {
    ListUsers().then((res) => {
      setUsers(res)
    })
  }

  return (
    <userContext.Provider value={{ users, setUsers, fetchUsers }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;