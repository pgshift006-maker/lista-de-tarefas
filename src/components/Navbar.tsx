import { useState } from "react";
import { NavLink } from "react-router";

type LinkMenu = {
    caminho: string;
    texto: string;
};

// Os links ficam numa lista para não repetir o mesmo <NavLink> cinco vezes.
const LINKS: LinkMenu[] = [
    { caminho: "/", texto: "Início" },
    { caminho: "/tarefas", texto: "Tarefas" },
    { caminho: "/nova-tarefa", texto: "Nova tarefa" },
    { caminho: "/sobre", texto: "Sobre" },
    { caminho: "/login", texto: "Entrar" },
];

function Navbar() {
    // Guarda se o menu está aberto. Só faz diferença em tela estreita (celular),
    // onde os links ficam escondidos atrás do botão "Menu".
    const [menuAberto, setMenuAberto] = useState(false);

    function fecharMenu() {
        setMenuAberto(false);
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
            </nav>
        </header>
    );
}

export default Navbar;
