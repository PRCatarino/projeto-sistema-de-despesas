import { createContext, useState} from "react";
import { FindUser } from "../services/users.services";

export const userContextId = createContext({});

export function UserIdProvider({ children }) {
  const [user, setUser] = useState([]);

  function FetchFindUser(id) {
    FindUser(id).then(res => {
      setUser(res)
    })
  }

  return (
    <userContextId.Provider value={{ user, setUser, FetchFindUser }}>
      {children}
    </userContextId.Provider> 
  );
}

export default UserIdProvider