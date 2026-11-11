# Front-end Frameworks — Trabalho Final (versão para 4 integrantes)

**Curso:** Análise e Desenvolvimento de Sistemas
**Tecnologia principal:** React.js com TypeScript
**Valor total:** 5,0 pontos (AV2)
**Tema:** informar até 20 de outubro
**Conclusão do trabalho:** prazo máximo até 17 de novembro

**Grupo:** Pedro, Amanda, Marlon e Erasmo
**Tema escolhido:** Lista de tarefas
**Repositório:** https://github.com/pgshift006-maker/lista-de-tarefas

> Este é o enunciado original adaptado para um grupo de **4 alunos**. Os requisitos
> do professor continuam os mesmos; o que muda é a divisão do trabalho entre as
> quatro pessoas.

---

## Objetivo geral

Desenvolver uma aplicação web utilizando React.js (com TypeScript) incluindo
componentização, hooks, roteamento e integração com dados (estáticos ou dinâmicos).

O tema da aplicação é escolhido pelo grupo e precisa atender aos requisitos mínimos.

---

## Composição do grupo

- **4 integrantes:** Pedro, Amanda, Marlon e Erasmo.
- Cada integrante cria e explica **2 componentes funcionais**, o que dá **8 componentes** no total.
- **8 é exatamente o mínimo exigido.** Com 4 pessoas não sobra folga: se um único
  componente não ficar pronto, o grupo fica abaixo do mínimo. O projeto pode ter
  componentes a mais (de layout, por exemplo), mas os 8 que serão apresentados
  precisam estar prontos e funcionando.
- O enunciado original tem uma frase confusa ("10 componentes por grupo, caso tenha
  6 componentes"). Para um grupo de 4 ela não faz diferença: as duas leituras dão 8.

---

## Requisitos mínimos para o grupo de 4

| Requisito | Mínimo exigido | Como fica com 4 pessoas |
|---|---|---|
| Componentes funcionais | 8 | 2 por integrante |
| Páginas distintas | 5 | cada integrante é dono de pelo menos 1 página; quem monta as rotas fica com a 5ª |
| Hooks diferentes | 4 | cada integrante usa e explica pelo menos 1 hook diferente |
| Linguagem | TypeScript, obrigatório | todos os arquivos em `.ts`/`.tsx`, com as props tipadas |
| Backend ou API | opcional | vale até **+1,0 ponto extra**; um integrante assume |
| Apresentação | 15 minutos | cerca de 3 minutos por integrante, mais abertura e encerramento |

**Pontuação:** a apresentação e a explicação do código valem os **5,0 pontos**. A
integração com API real ou backend próprio (Node.js, Firebase ou outra solução
REST/GraphQL) vale **até 1,0 ponto extra**.

---

## Divisão sugerida

O tema é uma **lista de tarefas**. As 5 páginas são: **Home**, **Sobre**,
**Login**, **Tarefas** (a lista) e **Nova tarefa** (o formulário). O que importa é
manter **2 componentes e pelo menos 1 hook por pessoa**. A ordem das pessoas é só
uma sugestão: troquem as partes entre vocês se fizer mais sentido.

| Integrante | Parte do sistema | Componentes (2) | Página(s) | Hook(s) que explica |
|---|---|---|---|---|
| **Pedro** | Estrutura e navegação | `Navbar`, `Footer` | Home, Sobre e a configuração das rotas | `useState` (abrir e fechar o menu) |
| **Amanda** | Login e sessão | `LoginForm`, `RotaProtegida` | Login | `useContext` (contexto de autenticação: só quem entrou vê as tarefas) |
| **Marlon** | Lista de tarefas | `ListaTarefas`, `ItemTarefa` | Tarefas | `useEffect` (carregar as tarefas) e `useMemo` (filtro todas / pendentes / concluídas e o contador) |
| **Erasmo** | Criar tarefa | `FormTarefa`, `ModalConfirmacao` | Nova tarefa | `useRef` (foco no campo do título) e um hook próprio, `useLocalStorage` (salvar as tarefas no navegador para não sumirem ao recarregar) |

O `ModalConfirmacao` do Erasmo também serve para confirmar a exclusão de uma tarefa
na lista do Marlon.

Com essa divisão o projeto usa **6 hooks diferentes**, dois acima do mínimo. Se um
deles não ficar pronto a tempo, o grupo continua cumprindo a exigência de 4.

**Ponto extra (API):** se o grupo for atrás do +1,0, quem assume naturalmente é
Marlon, porque o `useEffect` da página Tarefas já é o lugar onde os dados chegam.
Basta trocar o armazenamento no navegador por um JSON Server ou pelo Firebase.
Nesse caso o `useLocalStorage` passa a guardar só o filtro escolhido, e o hook
continua contando.

### Organização sugerida das pastas

```
src/
  components/   os 8 componentes, um arquivo para cada
  pages/        Home, Sobre, Login, Tarefas, NovaTarefa
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
5 páginas ainda vazias, as rotas no `App.tsx` e o tipo `types/Tarefa.ts`. Assim
cada um já tem o próprio arquivo esperando, e ninguém precisa mexer no `App.tsx`,
que é o arquivo que mais daria conflito.

**2. Cada um na sua branch.** Depois que o commit principal estiver no GitHub:

| Integrante | Branch |
|---|---|
| Pedro | `pedro-estrutura` |
| Amanda | `amanda-login` |
| Marlon | `marlon-lista` |
| Erasmo | `erasmo-nova-tarefa` |

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
mudar arquivo de outra pessoa (o `App.tsx`, o `Tarefa.ts`), avisa no grupo antes.

---

## Apresentação: 15 minutos, com os 4 participando

| Tempo | Quem | O que mostra |
|---|---|---|
| 0:00 – 1:00 | Pedro | Tema, objetivo do sistema e tecnologias usadas |
| 1:00 – 4:00 | Pedro | Navegação entre as páginas, rotas, `Navbar`, `Footer` e `useState` |
| 4:00 – 7:00 | Amanda | Login funcionando, `LoginForm`, `RotaProtegida` e `useContext` |
| 7:00 – 10:00 | Marlon | Página Tarefas, `ListaTarefas`, `ItemTarefa`, `useEffect`, `useMemo` (e a API, se houver) |
| 10:00 – 13:00 | Erasmo | Página Nova tarefa, `FormTarefa`, `ModalConfirmacao`, `useRef` e `useLocalStorage` |
| 13:00 – 15:00 | Todos | Uso completo do sistema do começo ao fim, deploy (se houver) e perguntas |

Em cada bloco de 3 minutos: primeiro mostrar a tela funcionando, depois abrir o
código dos 2 componentes e explicar onde e por que o hook foi usado.

Se não for possível apresentar presencialmente, gravar a apresentação e enviar o
link do YouTube.

---

## Entrega (no Teams, pelo link do GitHub)

- [ ] Repositório **público** no GitHub com o código-fonte completo
- [ ] `README.md` com as instruções de instalação e uso (por exemplo, `npm install` e `npm run dev`)
- [ ] No README, a tabela com **Pedro, Amanda, Marlon e Erasmo** e os componentes de cada um (copiem a tabela da divisão acima)
- [ ] No README, prints das telas principais (as 5 páginas)
- [ ] Deploy (opcional): Vercel, Netlify, Render etc.
- [ ] Link do YouTube, se a apresentação for gravada
