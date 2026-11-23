import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Tarefas from "./pages/Tarefas";
import NovaTarefa from "./pages/NovaTarefa";
import DetalhesTarefa from "./pages/DetalhesTarefa";
import { AuthProvider } from "./context/AuthProvider";
import RotaProtegida from "./components/RotaProtegida";

function App() {
  return (
    // O AuthProvider (da Amanda) fica por fora de tudo: assim qualquer
    // componente, inclusive a Navbar, consegue saber se o usuário entrou.
    <AuthProvider>
      <BrowserRouter>
        {/* Navbar e Footer ficam fora das <Routes>: aparecem em todas as páginas. */}
        <Navbar />

        <div className="conteudo">
          {/* Só o que está aqui dentro troca quando a URL muda. */}
          <Routes>
            {/* Páginas abertas: qualquer um vê. */}
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />

            {/* Páginas fechadas: a RotaProtegida manda para /login quem não entrou.
                As rotas de dentro aparecem no lugar do <Outlet /> dela. */}
            <Route element={<RotaProtegida />}>
              <Route path="/tarefas" element={<Tarefas />} />
              <Route path="/nova-tarefa" element={<NovaTarefa />} />
              {/* O ":id" é um parâmetro: /tarefas/3 abre a tarefa de id 3. */}
              <Route path="/tarefas/:id" element={<DetalhesTarefa />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
