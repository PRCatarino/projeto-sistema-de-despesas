import { useParams } from "react-router-dom";
import { userContextId } from "../context/userId-context";
import { useContext, useEffect } from "react";

function TableUser() {
    const {user, setUser, FetchFindUser} = useContext(userContextId);
    console.log(user)
    let {id} = useParams()
   
    useEffect(() => {
      FetchFindUser(id)
    },[])
    
  return (
    <h1>{id}</h1>
  );
}

export default TableUser;
