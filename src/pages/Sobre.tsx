type Integrante = {
    nome: string;
    parte: string;
    componentes: string;
    hooks: string;
};

const INTEGRANTES: Integrante[] = [
    { nome: "Pedro", parte: "Estrutura e navegação", componentes: "Navbar, Footer", hooks: "useState" },
    { nome: "Amanda", parte: "Login e sessão", componentes: "LoginForm, RotaProtegida", hooks: "useContext" },
    { nome: "Marlon", parte: "Lista de tarefas", componentes: "ListaTarefas, ItemTarefa", hooks: "useEffect, useMemo" },
    { nome: "Erasmo", parte: "Criar tarefa", componentes: "FormTarefa, ModalConfirmacao", hooks: "useRef, useLocalStorage" },
    { nome: "Marcos", parte: "Detalhes da tarefa", componentes: "CartaoDetalhes, SeloStatus", hooks: "useParams, useNavigate" },
];

const TECNOLOGIAS: string[] = ["React 19", "TypeScript", "React Router", "Vite"];

function Sobre() {
    return (
        <section className="pagina">
            <h1>Sobre</h1>
            <p className="pagina-resumo">
                Aplicação de lista de tarefas feita como trabalho final da disciplina
                Front-end Frameworks, do curso de Análise e Desenvolvimento de Sistemas.
            </p>

            <h2>Tecnologias</h2>
            <ul className="tecnologias">
                {TECNOLOGIAS.map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                ))}
            </ul>

            <h2>Quem fez cada parte</h2>
            <div className="tabela-rolagem">
                <table className="tabela">
                    <thead>
                        <tr>
                            <th>Integrante</th>
                            <th>Parte</th>
                            <th>Componentes</th>
                            <th>Hooks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {INTEGRANTES.map((integrante) => (
                            <tr key={integrante.nome}>
                                <td>{integrante.nome}</td>
                                <td>{integrante.parte}</td>
                                <td>{integrante.componentes}</td>
                                <td>{integrante.hooks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Sobre;
