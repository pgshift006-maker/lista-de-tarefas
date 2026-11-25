
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import type { Tarefa } from "../types/Tarefa";
import CartaoDetalhes from "../components/CartaoDetalhes";
import ModalConfirmacao from "../components/ModalConfirmacao";
import useLocalStorage from "../hooks/useLocalStorage";

export default function DetalhesTarefa() {
  // Identifica a tarefa pela URL.
  const { id } = useParams();
  const navigate = useNavigate();

  // Utiliza o armazenamento criado pelo Erasmo.
  const [tarefas, setTarefas] = useLocalStorage<Tarefa[]>(
    "tarefas",
    []
  );

  // Controla a janela de confirmação.
  const [modalAberto, setModalAberto] = useState(false);

  // Controla a navegação após a exclusão.
  const [excluindo, setExcluindo] = useState(false);

  // Converte o ID recebido como texto para número.
  const tarefaId = Number(id);

  // Procura a tarefa correspondente.
  const tarefa = tarefas.find(
    (item) => item.id === tarefaId
  );

  // Conclui ou reabre a tarefa.
  function alternarStatus() {
    setTarefas((atuais) =>
      atuais.map((item) =>
        item.id === tarefaId
          ? {
              ...item,
              concluida: !item.concluida,
            }
          : item
      )
    );
  }

  // Confirma e realiza a exclusão.
  function confirmarExclusao() {
    setTarefas((atuais) =>
      atuais.filter(
        (item) => item.id !== tarefaId
      )
    );

    setModalAberto(false);
    setExcluindo(true);
  }

  // Navega depois que o armazenamento é atualizado.
  useEffect(() => {
    if (excluindo) {
      navigate("/tarefas", { replace: true });
    }
  }, [excluindo, navigate]);

  // Evita mostrar uma tarefa já excluída.
  if (excluindo) {
    return (
      <main>
        <p>Excluindo tarefa...</p>
      </main>
    );
  }

  // Trata IDs inexistentes.
  if (!tarefa) {
    return (
      <main>
        <h1>Tarefa não encontrada</h1>
        <p>
          A tarefa solicitada não existe.
        </p>

        <button
          onClick={() => navigate("/tarefas")}
        >
          Voltar para a lista
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Detalhes da tarefa</h1>

      <CartaoDetalhes
        tarefa={tarefa}
        onAlternarStatus={alternarStatus}
        onExcluir={() => setModalAberto(true)}
        onVoltar={() => navigate("/tarefas")}
      />

      <ModalConfirmacao
        aberto={modalAberto}
        mensagem={`Deseja realmente excluir a tarefa "${tarefa.titulo}"?`}
        onConfirmar={confirmarExclusao}
        onCancelar={() => setModalAberto(false)}
      />
    </main>
  );
}
