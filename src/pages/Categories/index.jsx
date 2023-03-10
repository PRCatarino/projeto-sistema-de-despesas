import { useState } from "react";
import FormModalUser from "../../components/modalUser";
import TotalSection from "../../components/section";
import MainSearch from "../../components/main";
import TableExpense from "../../components/table";
import Modal from "../../components/Modal";
import TableCategory from "../../components/table/tableCategory";

export default function Category(){
   
    return(
      <div>
       <TableCategory/>
      </div>
  );
}