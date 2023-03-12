import { useEffect, useState } from "react";
import { CreateCategory } from "../services/categories.services";
import { useRef, useContext } from "react";
import { ListCategories } from "../services/categories.services";
import { categoryContext } from "../context/category-context";

export default function CategoryModal(props) {
  const inputCategory = useRef(null);
  const [categories, setCategories] = useState([]);
  const { fetchCategories } = useContext(categoryContext);

  const handleSubmit = () => {
    const body = {
      categoryID: inputCategory.current.value,
    };
    CreateCategory(body);
    fetchCategories();
  };

  useEffect(() => {
    ListCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <form className="form-modal">
      <div>
        <h3>ADICIONAR CATEGORIA</h3>
      </div>
      <br />
      <label htmlFor="">Categoria</label>
      <input ref={inputCategory} name="" id="">
      </input>
      <div className="btn-modal">
        <button
          type="button"
          className="modal-close save"
          onClick={() => handleSubmit()}
        >
          SALVAR
        </button>
        <button
          type="button"
          className="modal-close cancel"
          onClick={() => props.onClose()}
        >
          CANCELAR
        </button>
      </div>
    </form>
  );
}
