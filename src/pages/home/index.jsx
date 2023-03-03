import { useState } from "react";

import TotalSection from "../../components/section";
import MainSearch from "../../components/main";
import TableExpense from "../../components/table";
import Modal from "../../components/Modal";

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <TotalSection />
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
      <div className="organizationTable">
        <MainSearch />
        <TableExpense />
      </div>
      <div className="div-btn-table">
        <button
          type="button"
          className="btn-table"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          ADICIONAR DESPESA
        </button>
      </div>
    </div>
  );
}
