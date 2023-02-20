import Header from "./components/Home/header";
import TotalSection from "./components/Home/section";
import MainSearch from "./components/Home/main";
import TableExpense from "./components/Home/table";


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
        <MainSearch />
      </main>
      <div>
        <TableExpense />
      </div>
      
    </div>
  )
}

export default App;
