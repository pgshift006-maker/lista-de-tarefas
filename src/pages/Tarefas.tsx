import { useEffect } from "react";
import ListaTarefas from "../components/ListaTarefas";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Tarefa } from "../types/Tarefa";

// Mesma chave que o Erasmo usa na página Nova tarefa.
const CHAVE_TAREFAS = "tarefas";

function Tarefas() {
    // As tarefas agora vêm do navegador (useLocalStorage do Erasmo),
    // então não somem quando a página é recarregada.
    const [tarefas, setTarefas] = useLocalStorage<Tarefa[]>(CHAVE_TAREFAS, []);

    // Recarrega a lista se as tarefas mudarem em outra aba
    // (por exemplo, alguém cria uma tarefa na página Nova tarefa aberta em outra aba).
    useEffect(() => {
        function aoMudarArmazenamento(evento: StorageEvent) {
            if (evento.key === CHAVE_TAREFAS) {
                setTarefas(evento.newValue ? JSON.parse(evento.newValue) : []);
            }
        }

        window.addEventListener("storage", aoMudarArmazenamento);
        return () => window.removeEventListener("storage", aoMudarArmazenamento);
    }, [setTarefas]);

    return (
        <main>
            <h1>Tarefas</h1>
            <ListaTarefas tarefas={tarefas} />
        </main>
    );
}

export default Tarefas;
