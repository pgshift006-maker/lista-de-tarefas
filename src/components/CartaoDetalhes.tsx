
import type { Tarefa } from "../types/Tarefa";
import SeloStatus from "./SeloStatus";

interface CartaoDetalhesProps {
  tarefa: Tarefa;
  onAlternarStatus: () => void;
  onExcluir: () => void;
  onVoltar: () => void;
}

export default function CartaoDetalhes({
  tarefa,
  onAlternarStatus,
  onExcluir,
  onVoltar,
}: CartaoDetalhesProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "24px",
        maxWidth: "600px",
        margin: "30px auto",
      }}
    >
      <p>Tarefa #{tarefa.id}</p>

      <h2>{tarefa.titulo}</h2>

      <SeloStatus concluida={tarefa.concluida} />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "24px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={onAlternarStatus}>
          {tarefa.concluida
            ? "Reabrir tarefa"
            : "Concluir tarefa"}
        </button>

        <button onClick={onExcluir}>
          Excluir tarefa
        </button>

        <button onClick={onVoltar}>
          Voltar
        </button>
      </div>
    </div>
  );
}
