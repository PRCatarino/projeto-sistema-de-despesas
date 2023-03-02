import { useState } from "react";

import TotalSection from "../../components/section";
import MainSearch from "../../components/main";
import TableExpense from "../../components/table";
import Modal from "../../components/Modal";


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
                 (true);
              }}
            >
              ADICIONAR USUARIO
            </button>
          </div>
        </div>
      </div>
    );
}