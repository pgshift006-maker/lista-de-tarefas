import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Tarefas from "./pages/Tarefas";
import NovaTarefa from "./pages/NovaTarefa";
import DetalhesTarefa from "./pages/DetalhesTarefa";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar e Footer ficam fora das <Routes>: aparecem em todas as páginas. */}
      <Navbar />

      <div className="conteudo">
        {/* Só o que está aqui dentro troca quando a URL muda. */}
        {/* A Amanda envolve /tarefas, /nova-tarefa e /tarefas/:id com a RotaProtegida. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/nova-tarefa" element={<NovaTarefa />} />
          {/* O ":id" é um parâmetro: /tarefas/3 abre a tarefa de id 3. */}
          <Route path="/tarefas/:id" element={<DetalhesTarefa />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
