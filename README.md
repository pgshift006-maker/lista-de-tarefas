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

## Como usar

1. Clique em **Entrar** no menu. O login é simulado: qualquer e-mail e senha
   preenchidos funcionam, porque o trabalho não tem servidor.
2. Em **Nova tarefa**, escreva o título e confirme. A tarefa fica salva no próprio
   navegador (`localStorage`) e não some ao recarregar a página.
3. Em **Tarefas**, filtre entre todas, pendentes e concluídas, e clique numa tarefa
   para abrir os detalhes.
4. **Sair** fica no menu. O login não é guardado: ao recarregar a página, é preciso
   entrar de novo.

## Páginas

| Endereço | Página | Precisa entrar? |
|---|---|---|
| `/` | Home | não |
| `/sobre` | Sobre | não |
| `/login` | Login | não |
| `/tarefas` | Tarefas (a lista) | sim |
| `/nova-tarefa` | Nova tarefa (o formulário) | sim |
| `/tarefas/:id` | Detalhes da tarefa (por exemplo, `/tarefas/3`) | sim |

Quem tenta abrir uma página fechada sem ter entrado é levado para `/login`.

## Telas

_Os prints das telas principais entram aqui quando o sistema estiver pronto._
