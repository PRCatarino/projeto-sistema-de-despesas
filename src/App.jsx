import { useState } from "react";

import Header from "./components/Home/header";
import TotalSection from "./components/Home/section";
import MainSearch from "./components/Home/main";
import TableExpense from "./components/Home/table";
import Modal from "./components/Modal/modal-expenses";



function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <TotalSection />
      </section>
      <main>
        <MainSearch />
      </main>
      <div>
        <TableExpense />
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen} />
        <div className="div-btn-table">
        <button type="button" className="btn-table" onClick={() => {setModalOpen(true)}}>
          ADICIONAR DESPESA
        </button>
      </div>
      </div>
      
    </div>
  )
}

export default App;
