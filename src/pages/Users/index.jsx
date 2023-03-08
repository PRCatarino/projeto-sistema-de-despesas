import { useState } from "react";
import FormModalUser from "../../components/modalUser";
import TotalSection from "../../components/section";
import MainSearch from "../../components/main";

import Modal from "../../components/Modal";
import TableUsers from "../../components/table/tableUsers";


export default function Users(){
    const [modalOpen, setModalOpen] = useState(false)
    return(
        <div>
        <TotalSection />
        <MainSearch />
        <div>
          <TableExpense />
          <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
          <div className="div-btn-table">
            <button
              type="button"
              className="btn-table"
              onClick={() => {
                setModalOpen(true);
              }}
              >
              ADICIONAR USUARIO
            </button>
        </div>
      </div>
    </div>
  );
}