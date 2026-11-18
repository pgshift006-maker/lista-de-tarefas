# Lista de Tarefas

Trabalho final de **Front-end Frameworks** (Análise e Desenvolvimento de Sistemas).
Aplicação web de lista de tarefas feita em **React.js com TypeScript**.

> **Em construção.** A divisão do trabalho, os requisitos e o roteiro da
> apresentação estão em
> [trabalho-final-react-5-integrantes.md](trabalho-final-react-5-integrantes.md).

## Integrantes e componentes

| Integrante | Componentes | Página(s) | Hooks |
|---|---|---|---|
| Pedro | `Navbar`, `Footer` | Home, Sobre e as rotas | `useState` |
| Amanda | `LoginForm`, `RotaProtegida` | Login | `useContext` |
| Marlon | `ListaTarefas`, `ItemTarefa` | Tarefas | `useEffect`, `useMemo` |
| Erasmo | `FormTarefa`, `ModalConfirmacao` | Nova tarefa | `useRef`, `useLocalStorage` |
| Marcos | `CartaoDetalhes`, `SeloStatus` | Detalhes da tarefa | `useParams`, `useNavigate` |

## Como instalar e rodar

Precisa do **Node.js 22.22 ou mais novo** (o React Router 8 não roda em versão anterior).

```
git clone https://github.com/pgshift006-maker/lista-de-tarefas.git
cd lista-de-tarefas
npm install
npm run dev
```

Depois abra no navegador o endereço que aparece no terminal (normalmente
`http://localhost:5173`).

| Comando | O que faz |
|---|---|
| `npm run dev` | roda o projeto em modo de desenvolvimento |
| `npm run build` | confere os tipos do TypeScript e gera a versão final na pasta `dist` |
| `npm run lint` | procura erros de código com o ESLint |

## Páginas

| Endereço | Página |
|---|---|
| `/` | Home |
| `/sobre` | Sobre |
| `/login` | Login |
| `/tarefas` | Tarefas (a lista) |
| `/nova-tarefa` | Nova tarefa (o formulário) |
| `/tarefas/:id` | Detalhes da tarefa (por exemplo, `/tarefas/3`) |

## Telas

_Os prints das telas principais entram aqui quando o sistema estiver pronto._
