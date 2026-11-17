import { Link } from "react-router";
import type { Tarefa } from "../types/Tarefa";

type ItemTarefaProps = {
    tarefa: Tarefa;
};

function ItemTarefa({ tarefa }: ItemTarefaProps) {
    return (
        <li>
            <Link to={`/tarefas/${tarefa.id}`}>{tarefa.titulo}</Link>
            {" — "}
            <span>{tarefa.concluida ? "Concluída" : "Pendente"}</span>
        </li>
    );
}

export default ItemTarefa;
