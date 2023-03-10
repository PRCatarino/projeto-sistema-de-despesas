import { useContext, useEffect, useState } from "react";
import Category from "../../pages/Categories";
import { categoryContext } from "../context/category-context";
import Table from "./table";

function TableCategory() {
  const {categories, setUsers, fetchCategories} = useContext(categoryContext);

  useEffect(() => {
    fetchCategories()
  },[])

  return (
    <Table data={categories} fields={[{
        label: 'Id',
        key:'id'
      },
      {
        label: 'Categoria',
        key: 'name'
      },
      {
        label: 'Açoes',
        action: (cate) => {
           return <div id="ActionsMain">
            <button id="btnEdit" className="btnAction">Editar</button>
            <button id="btnDelete" className="btnAction">Excluir</button>
           </div>
        }
      }
    ]}/>
  );
}

export default TableCategory;
