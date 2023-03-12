import { useState } from "react";
import CategoryModal from "../../components/modalCategory";
import Modal from "../../components/Modal";
import TableCategory from "../../components/table/tableCategory";

export default function Category() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <TableCategory />
      <Modal isOpen={modalOpen}>
        <CategoryModal onClose={() => setModalOpen(false)} />
      </Modal>
      <div className="div-btn-table">
          <button
            type="button"
            className="btn-table"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            ADICIONAR CATEGORIA
          </button>
        </div>
    </div>
  );
}
