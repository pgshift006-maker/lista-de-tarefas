import { useEffect, useState } from "react";

function useLocalStorage<T>(chave: string, valorInicial: T) {
    
  const [valor, setValor] = useState<T>(() => {
        try {
            const salvo = localStorage.getItem(chave);
            return salvo !== null ? (JSON.parse(salvo) as T) : valorInicial;
        } catch {
            return valorInicial;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(chave, JSON.stringify(valor));
        } catch (erro){
            console.warn(`Não foi possível salvar "${chave}" no navegador.`, erro);
        }
    }, [chave, valor]);

    return [valor, setValor] as const;
}

export default useLocalStorage;
