import { useMemo, useState } from "react";
import ItemTarefa from "./ItemTarefa";
import type { Tarefa } from "../types/Tarefa";

type Filtro = "todas" | "pendentes" | "concluidas";

type ListaTarefasProps = {
    tarefas: Tarefa[];
};

function ListaTarefas({ tarefas }: ListaTarefasProps) {
    const [filtro, setFiltro] = useState<Filtro>("todas");

    // Só refaz o filtro quando a lista ou o filtro escolhido mudam.
    const tarefasFiltradas = useMemo(() => {
        if (filtro === "pendentes") {
            return tarefas.filter((tarefa) => !tarefa.concluida);
        }
        if (filtro === "concluidas") {
            return tarefas.filter((tarefa) => tarefa.concluida);
        }
        return tarefas;
    }, [tarefas, filtro]);

    // Só reconta quando a lista muda (trocar o filtro não muda o total).
    const totalPendentes = useMemo(
        () => tarefas.filter((tarefa) => !tarefa.concluida).length,
        [tarefas]
    );

    return (
        <section>
            <p>
                {totalPendentes} pendente(s) de {tarefas.length} tarefa(s)
            </p>

            <div>
                <button onClick={() => setFiltro("todas")} disabled={filtro === "todas"}>
                    Todas
                </button>
                <button onClick={() => setFiltro("pendentes")} disabled={filtro === "pendentes"}>
                    Pendentes
                </button>
                <button onClick={() => setFiltro("concluidas")} disabled={filtro === "concluidas"}>
                    Concluídas
                </button>
            </div>

            {tarefasFiltradas.length === 0 ? (
                <p>Nenhuma tarefa aqui.</p>
            ) : (
                <ul>
                    {tarefasFiltradas.map((tarefa) => (
                        <ItemTarefa key={tarefa.id} tarefa={tarefa} />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default ListaTarefas;
