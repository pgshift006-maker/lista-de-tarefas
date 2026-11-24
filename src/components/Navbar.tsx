import { useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../context/useAuth";

type LinkMenu = {
    caminho: string;
    texto: string;
};

// Os links ficam numa lista para não repetir o mesmo <NavLink> quatro vezes.
// "Entrar" / "Sair" fica fora da lista porque muda conforme o login.
const LINKS: LinkMenu[] = [
    { caminho: "/", texto: "Início" },
    { caminho: "/tarefas", texto: "Tarefas" },
    { caminho: "/nova-tarefa", texto: "Nova tarefa" },
    { caminho: "/sobre", texto: "Sobre" },
];

function Navbar() {
    // Guarda se o menu está aberto. Só faz diferença em tela estreita (celular),
    // onde os links ficam escondidos atrás do botão "Menu".
    const [menuAberto, setMenuAberto] = useState(false);

    // Vem do contexto de login da Amanda: diz se o usuário entrou e permite sair.
    const { isAuthenticated, logout } = useAuth();

    function fecharMenu() {
        setMenuAberto(false);
    }

    // Não precisa mandar para outra página: se a página aberta for protegida,
    // a RotaProtegida da Amanda já leva para /login sozinha.
    function sair() {
        logout();
        fecharMenu();
    }

    return (
        <header className="navbar">
            <NavLink to="/" className="navbar-marca" onClick={fecharMenu}>
                Lista de Tarefas
            </NavLink>

            <button
                type="button"
                className="navbar-botao"
                aria-expanded={menuAberto}
                aria-controls="menu-principal"
                onClick={() => setMenuAberto(!menuAberto)}
            >
                {menuAberto ? "Fechar" : "Menu"}
            </button>

            <nav
                id="menu-principal"
                className={menuAberto ? "navbar-links aberto" : "navbar-links"}
            >
                {LINKS.map((link) => (
                    // O NavLink marca sozinho o link da página atual com a classe "active".
                    // O "end" só no Início: sem ele, "/" ficaria marcado em todas as páginas.
                    <NavLink
                        key={link.caminho}
                        to={link.caminho}
                        end={link.caminho === "/"}
                        onClick={fecharMenu}
                    >
                        {link.texto}
                    </NavLink>
                ))}

                {isAuthenticated ? (
                    <button type="button" className="navbar-sair" onClick={sair}>
                        Sair
                    </button>
                ) : (
                    <NavLink to="/login" onClick={fecharMenu}>
                        Entrar
                    </NavLink>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
