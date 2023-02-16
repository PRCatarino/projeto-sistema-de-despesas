import Header from "./components/header";
import TotalSection from "./components/section";
import MainTable from "./components/main";


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
      
    </div>
  )
}

export default App;
