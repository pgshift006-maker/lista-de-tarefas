import { useEffect, useState } from "react";
import ItemTarefa from "../components/ItemTarefa";
import type { Tarefa } from "../types/Tarefa";

// Lista fixa para testar enquanto o useLocalStorage do Erasmo não fica pronto.
const TAREFAS_DE_EXEMPLO: Tarefa[] = [
    { id: 1, titulo: "Estudar hooks do React", concluida: true },
    { id: 2, titulo: "Fazer a página de tarefas", concluida: false },
    { id: 3, titulo: "Ensaiar a apresentação", concluida: false },
];

// Simula a busca dos dados, como se viessem de uma API.
function carregarTarefas(): Promise<Tarefa[]> {
    return Promise.resolve(TAREFAS_DE_EXEMPLO);
}

function Tarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [carregando, setCarregando] = useState(true);

    // Carrega as tarefas uma vez, quando a página abre.
    useEffect(() => {
        carregarTarefas().then((dados) => {
            setTarefas(dados);
            setCarregando(false);
        });
    }, []);

    return (
        <main>
            <h1>Tarefas</h1>
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {tarefas.map((tarefa) => (
                        <ItemTarefa key={tarefa.id} tarefa={tarefa} />
                    ))}
                </ul>
            )}
        </main>
    );
}

export default Tarefas;
