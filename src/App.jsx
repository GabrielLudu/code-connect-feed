import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Sidebar from "./components/Sidebar";
import Filtro from "./components/Filtro";
import Ordenacao from "./components/Ordenacao";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
      </div>
    </div>
  );
}

export default App;
