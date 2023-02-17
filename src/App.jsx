import Header from "./components/Home/header";
import TotalSection from "./components/Home/section";
import MainTable from "./components/Home/main";
import TableHeader from "./components/Home/table/tableHeader";


function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <TotalSection />
      </section>
      <main>
        <MainTable />
      </main>
      <table>
        <TableHeader />
      </table>
      
    </div>
  )
}

export default App;
