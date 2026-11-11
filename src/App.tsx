import {BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Tarefas from "./pages/Tarefas";
import NovaTarefa from "./pages/NovaTarefa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/nova-tarefa" element={<NovaTarefa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
