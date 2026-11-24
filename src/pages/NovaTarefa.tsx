import { useState } from "react";
import { useNavigate } from "react-router";
import FormTarefa from "../components/FormTarefa";
import ModalConfirmacao from "../components/ModalConfirmacao";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Tarefa } from "../types/Tarefa";

function NovaTarefa() {
    
    const[, setTarefas] = useLocalStorage<Tarefa[]>("tarefas", []);
    const[pendente, setPendente] = useState<string | null>(null);
    const navigate = useNavigate();

    function confirmar() {
        if (pendente === null) {
            return;
        }
         const titulo = pendente;

        setTarefas((atuais) => {
            const proximoId = Math.max(0, ...atuais.map((t) => t.id)) + 1;
            return [...atuais, { id: proximoId, titulo, concluida: false }];
        });
        navigate("/tarefas");
    }
    return( 
        <main>
            <h1>Nova Tarefa</h1>
            <FormTarefa
                onSalvar={setPendente}
                onCancelar={() => navigate("/tarefas")}
                /> 
            <ModalConfirmacao
                aberto={pendente !== null}
                mensagem={`Salvar a tarefa "${pendente ?? ""}"?`}
                onConfirmar={confirmar}
                onCancelar={() => setPendente(null)}
            />
        </main>
    );
}

export default NovaTarefa;
