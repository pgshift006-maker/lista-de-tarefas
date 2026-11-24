import { Link } from "react-router";

type Passo = {
    titulo: string;
    texto: string;
};

const PASSOS: Passo[] = [
    { titulo: "1. Entre", texto: "Faça login para ver as suas tarefas." },
    { titulo: "2. Anote", texto: "Crie uma tarefa com o que você precisa fazer." },
    { titulo: "3. Acompanhe", texto: "Marque o que terminou e filtre o que ainda falta." },
];

function Home() {
    return (
        <section className="pagina">
            <h1>Lista de Tarefas</h1>
            <p className="pagina-resumo">
                Anote o que precisa fazer, marque o que já terminou e veja o que ainda falta.
            </p>

            <div className="acoes">
                <Link to="/tarefas" className="botao">
                    Ver minhas tarefas
                </Link>
                <Link to="/nova-tarefa" className="botao botao-secundario">
                    Criar tarefa
                </Link>
            </div>

            <ul className="passos">
                {PASSOS.map((passo) => (
                    <li key={passo.titulo}>
                        <h2>{passo.titulo}</h2>
                        <p>{passo.texto}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Home;
