# Front-end Frameworks — Trabalho Final (versão para 5 integrantes)

**Curso:** Análise e Desenvolvimento de Sistemas
**Tecnologia principal:** React.js com TypeScript
**Valor total:** 5,0 pontos (AV2)
**Tema:** informar até 20 de outubro
**Conclusão do trabalho:** prazo máximo até 17 de novembro

**Grupo:** Pedro, Amanda, Marlon, Erasmo e Marcos
**Tema escolhido:** Lista de tarefas
**Repositório:** https://github.com/pgshift006-maker/lista-de-tarefas

> Este é o enunciado original adaptado para um grupo de **5 alunos**. Os requisitos
> do professor continuam os mesmos; o que muda é a divisão do trabalho entre as
> cinco pessoas. O Marcos entrou no grupo em 13 de novembro, depois da divisão
> original. A parte dele é uma página nova, para que nada do que os outros quatro
> já tinham recebido precise mudar.

---

## Objetivo geral

Desenvolver uma aplicação web utilizando React.js (com TypeScript) incluindo
componentização, hooks, roteamento e integração com dados (estáticos ou dinâmicos).

O tema da aplicação é escolhido pelo grupo e precisa atender aos requisitos mínimos.

---

## Composição do grupo

- **5 integrantes:** Pedro, Amanda, Marlon, Erasmo e Marcos.
- Cada integrante cria e explica **2 componentes funcionais**, o que dá **10 componentes** no total.
- O enunciado exige no mínimo **8 componentes**, qualquer que seja o tamanho do grupo.
  Com 10, o grupo tem **2 de folga**: se um componente atrasar, o projeto continua
  acima do mínimo. Mesmo assim, cada um precisa apresentar os seus 2.
- A frase confusa do enunciado ("10 componentes por grupo, caso tenha 6 componentes")
  agora bate com o grupo: 5 alunos × 2 componentes = 10.

---

## Requisitos mínimos para o grupo de 5

| Requisito | Mínimo exigido | Como fica com 5 pessoas |
|---|---|---|
| Componentes funcionais | 8 | 10, sendo 2 por integrante |
| Páginas distintas | 5 | 6: cada integrante é dono de pelo menos 1 página; quem monta as rotas fica com 2 |
| Hooks diferentes | 4 | 8: cada integrante usa e explica pelo menos 1 hook diferente |
| Linguagem | TypeScript, obrigatório | todos os arquivos em `.ts`/`.tsx`, com as props tipadas |
| Backend ou API | opcional | vale até **+1,0 ponto extra**; um integrante assume |
| Apresentação | 15 minutos | cerca de 2 min 30 s por integrante, mais abertura e encerramento |

**Pontuação:** a apresentação e a explicação do código valem os **5,0 pontos**. A
integração com API real ou backend próprio (Node.js, Firebase ou outra solução
REST/GraphQL) vale **até 1,0 ponto extra**.

---

## Divisão sugerida

O tema é uma **lista de tarefas**. As 6 páginas são: **Home**, **Sobre**,
**Login**, **Tarefas** (a lista), **Nova tarefa** (o formulário) e **Detalhes da
tarefa** (uma tarefa só, aberta ao clicar nela na lista). O que importa é manter
**2 componentes e pelo menos 1 hook por pessoa**. A ordem das pessoas é só uma
sugestão: troquem as partes entre vocês se fizer mais sentido.

| Integrante | Parte do sistema | Componentes (2) | Página(s) | Hook(s) que explica |
|---|---|---|---|---|
| **Pedro** | Estrutura e navegação | `Navbar`, `Footer` | Home, Sobre e a configuração das rotas | `useState` (abrir e fechar o menu) |
| **Amanda** | Login e sessão | `LoginForm`, `RotaProtegida` | Login | `useContext` (contexto de autenticação: só quem entrou vê as tarefas) |
| **Marlon** | Lista de tarefas | `ListaTarefas`, `ItemTarefa` | Tarefas | `useEffect` (carregar as tarefas) e `useMemo` (filtro todas / pendentes / concluídas e o contador) |
| **Erasmo** | Criar tarefa | `FormTarefa`, `ModalConfirmacao` | Nova tarefa | `useRef` (foco no campo do título) e um hook próprio, `useLocalStorage` (salvar as tarefas no navegador para não sumirem ao recarregar) |
| **Marcos** | Detalhes da tarefa | `CartaoDetalhes`, `SeloStatus` | Detalhes da tarefa (`/tarefas/:id`) | `useParams` (ler na URL qual tarefa abrir) e `useNavigate` (voltar para a lista depois de excluir) |

O `ModalConfirmacao` do Erasmo também serve para confirmar a exclusão de uma tarefa
na lista do Marlon e na página do Marcos.

Com essa divisão o projeto usa **8 hooks diferentes**, quatro acima do mínimo. Se um
deles não ficar pronto a tempo, o grupo continua cumprindo a exigência de 4.
`useParams` e `useNavigate` vêm do React Router, não do próprio React. São hooks do
mesmo jeito (começam com `use` e só podem ser chamados dentro de um componente), e,
mesmo que o professor conte só os do React, sobram 6.

### A parte do Marcos

Na lista, cada tarefa vira um link para `/tarefas/3`, em que o `3` é o `id` dela. A
página **Detalhes da tarefa** lê esse número com `useParams`, procura a tarefa e
mostra tudo no `CartaoDetalhes`: o título, o `SeloStatus` ("Pendente" ou
"Concluída") e os botões **Concluir / Reabrir**, **Excluir** e **Voltar**. Depois de
excluir, o `useNavigate` leva de volta para `/tarefas`.

- **O ponto de TypeScript para explicar:** o `useParams` devolve texto (`"3"`), e o
  `id` da `Tarefa` é `number`. Antes de comparar é preciso converter com
  `Number(id)`. Se a tarefa não existir (alguém digitou `/tarefas/999`), a página
  mostra "Tarefa não encontrada" em vez de quebrar.
- **Do que depende:** das tarefas salvas pelo `useLocalStorage` do Erasmo. Enquanto
  o hook não estiver pronto, o Marcos testa com uma lista fixa de 2 ou 3 tarefas
  escrita na própria página e troca depois.
- **O que os outros fazem para a parte dele funcionar:** o Pedro cria a página vazia
  `DetalhesTarefa.tsx` e a rota `/tarefas/:id` no `App.tsx`, protegida do mesmo
  jeito que `/tarefas`. O Marlon põe no `ItemTarefa` o link que abre a página. Se
  quiser, o Marlon também pode usar o `SeloStatus` no `ItemTarefa`, o que mostra
  reaproveitamento de componente na apresentação.

**Ponto extra (API):** se o grupo for atrás do +1,0, quem assume naturalmente é
Marlon, porque o `useEffect` da página Tarefas já é o lugar onde os dados chegam.
Basta trocar o armazenamento no navegador por um JSON Server ou pelo Firebase.
Nesse caso o `useLocalStorage` passa a guardar só o filtro escolhido, e o hook
continua contando.

### Organização sugerida das pastas

```
src/
  components/   os 10 componentes, um arquivo para cada
  pages/        Home, Sobre, Login, Tarefas, NovaTarefa, DetalhesTarefa
  context/      AuthContext.tsx (Amanda)
  hooks/        useLocalStorage.ts (Erasmo)
  types/        Tarefa.ts (o tipo da tarefa, usado por todos)
  App.tsx       as rotas (Pedro)
```

**Dica:** cada integrante deve fazer os commits com a própria conta do GitHub. O
histórico do repositório mostra quem fez cada parte, o que reforça a explicação de
cada um na apresentação.

### Como o grupo usa o Git

A `main` é a versão oficial do projeto. **Ninguém trabalha direto nela**: cada um
trabalha na própria branch, e o Pedro junta tudo na `main`.

**1. Commit principal (Pedro, na `main`).** O Pedro cria o projeto React com as
páginas ainda vazias, as rotas no `App.tsx` e o tipo `types/Tarefa.ts`. Assim
cada um já tem o próprio arquivo esperando, e ninguém precisa mexer no `App.tsx`,
que é o arquivo que mais daria conflito.

O commit principal entrou no GitHub em 11 de novembro, com as 5 primeiras páginas.
Como o Marcos chegou depois, o Pedro faz mais um commit na `main` com a página
vazia `DetalhesTarefa.tsx` e a rota `/tarefas/:id`, antes de o Marcos começar.

**2. Cada um na sua branch.** Depois que o commit principal estiver no GitHub:

| Integrante | Branch |
|---|---|
| Pedro | `pedro-estrutura` |
| Amanda | `amanda-login` |
| Marlon | `marlon-lista` |
| Erasmo | `erasmo-nova-tarefa` |
| Marcos | `marcos-detalhes` |

```
git clone https://github.com/pgshift006-maker/lista-de-tarefas.git
cd lista-de-tarefas
npm install
git checkout -b amanda-login        (troque pelo nome da sua branch)
```

Depois de trabalhar:

```
git add .
git commit -m "o que você fez, em uma frase"
git push -u origin amanda-login     (só o primeiro push precisa do -u)
```

**3. Juntar na `main`.** No GitHub, cada um abre um **Pull Request** da sua branch
para a `main`. O Pedro confere e aprova (*Merge*).

**4. Pegar o que os outros fizeram.** Quando algo novo entrar na `main`, cada um
atualiza a própria branch:

```
git checkout main
git pull
git checkout amanda-login
git merge main
```

**Regra para não dar conflito:** cada um mexe só nos próprios arquivos. Se precisar
mudar arquivo de outra pessoa (o `App.tsx`, o `Tarefa.ts`, o `ItemTarefa.tsx`),
avisa no grupo antes.

---

## Apresentação: 15 minutos, com os 5 participando

| Tempo | Quem | O que mostra |
|---|---|---|
| 0:00 – 1:00 | Pedro | Tema, objetivo do sistema e tecnologias usadas |
| 1:00 – 3:30 | Pedro | Navegação entre as páginas, rotas, `Navbar`, `Footer` e `useState` |
| 3:30 – 6:00 | Amanda | Login funcionando, `LoginForm`, `RotaProtegida` e `useContext` |
| 6:00 – 8:30 | Marlon | Página Tarefas, `ListaTarefas`, `ItemTarefa`, `useEffect`, `useMemo` (e a API, se houver) |
| 8:30 – 11:00 | Erasmo | Página Nova tarefa, `FormTarefa`, `ModalConfirmacao`, `useRef` e `useLocalStorage` |
| 11:00 – 13:30 | Marcos | Abre a tarefa que o Erasmo acabou de criar: página Detalhes, `CartaoDetalhes`, `SeloStatus`, `useParams` e `useNavigate` |
| 13:30 – 15:00 | Todos | Uso completo do sistema do começo ao fim, deploy (se houver) e perguntas |

Em cada bloco de 2 min 30 s: primeiro mostrar a tela funcionando, depois abrir o
código dos 2 componentes e explicar onde e por que o hook foi usado. Com cinco
pessoas o tempo fica apertado: vale ensaiar uma vez com cronômetro.

Se não for possível apresentar presencialmente, gravar a apresentação e enviar o
link do YouTube.

---

## Entrega (no Teams, pelo link do GitHub)

- [ ] Repositório **público** no GitHub com o código-fonte completo
- [ ] `README.md` com as instruções de instalação e uso (por exemplo, `npm install` e `npm run dev`)
- [ ] No README, a tabela com **Pedro, Amanda, Marlon, Erasmo e Marcos** e os componentes de cada um (copiem a tabela da divisão acima)
- [ ] No README, prints das telas principais (as 6 páginas)
- [ ] Deploy (opcional): Vercel, Netlify, Render etc.
- [ ] Link do YouTube, se a apresentação for gravada
