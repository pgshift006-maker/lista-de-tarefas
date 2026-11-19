import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type FormTarefaProps = {
  onSalvar: (titulo: string) => void;
  onCancelar: () => void;
}; 

function FormTarefa({ onSalvar, onCancelar }: FormTarefaProps) {
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");

  //useRef guarda referência ao <input> para podermos chamar.focus().
  //mudar o ref não trás nova renderização.
  const campoTitulo = useRef<HTMLInputElement>(null);
  
  //abrindo a página, o cursor já aparece no campo do título.
    useEffect(() => {
        campoTitulo.current?.focus();
    }, []);

    function enviar(evento: FormEvent<HTMLFormElement>) {
        evento.preventDefault(); //evita recarregar a página

        if (titulo.trim() === "") {
            setErro("O título é obrigatório.");
            campoTitulo.current?.focus(); //devolve o foco ao campo com erro
            return;
        }

        setErro("");
        onSalvar(titulo.trim());
    }

    return (
        <form onSubmit={enviar}>
            <label>
                Título{" "}
                <input
                    ref={campoTitulo}
                    value={titulo}
                    onChange={(evento) => setTitulo(evento.target.value)}
                />
            </label>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            <div>
                <button type="submit">Salvar</button>{" "}
                <button type="button" onClick={onCancelar}>
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export default FormTarefa;
