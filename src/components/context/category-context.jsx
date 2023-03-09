import { createContext, useState } from "react";
import { ListCategories } from "../services/categories.services";

export const categoryContext = createContext({});

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);

  function fetchCategories()  {
    ListCategories().then((res) => {
        setCategories(res)
    })
  }

  return (
    <categoryContext.Provider value={{ categories, setCategories, fetchCategories }}>
      {children}
    </categoryContext.Provider>
  );
}

export default CategoryProvider;