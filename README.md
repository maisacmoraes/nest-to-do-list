# Gerenciador de tarefas - Projeto com Nest.js, PostgreSQL e Prisma (teste técnico para Desenvolvedor Junior)


## Descrição do Projeto

Aplicação de gerenciamento de tarefas utilizando Nest.js como framework Backend, PostgreSQL como banco de dados e Prima. A aplicação permite que os usuários criem, leiam, atualizem e removam tarefas.

## Requisitos do Projeto

### Configuração do Projeto

- Nest.js
- Banco de dados PostgreSQL
- Prisma

### Modelagem de Dados

Entidade `Task` que representa uma tarefa, com os seguintes campos:
- `id` (chave primária)
- `title` (título da tarefa)
- `description` (descrição da tarefa)
- `status` (status da tarefa, por exemplo: “pendente”, “em andamento”, “concluída”)
- `createdAt` (data de criação da tarefa)
- `updatedAt` (data da última atualização da tarefa)

### API RESTful

A API segue os princípios do REST e utiliza os métodos HTTP adequados para cada operação (GET, POST, PUT, DELETE). Utiliza os recursos do Nest.js, como controllers, services e modules, para estruturar a aplicação de forma modular e organizada.

### Funcionalidades da Aplicação

Endpoints para as seguintes operações:
- Listar todas as tarefas
- Criar uma nova tarefa
- Visualizar os detalhes de uma tarefa específica
- Atualizar uma tarefa existente
- Excluir uma tarefa

Implementa validações adequadas para os dados de entrada (por exemplo, não permite criar uma tarefa sem um título).

### Documentação da API

A documentação da API é feita utilizando Swagger e inclui informações sobre os parâmetros de entrada, possíveis códigos de resposta e exemplos de requisições.

### Diferenciais

- **Autenticação e Autorização:** Sistema de autenticação para os usuários da aplicação, utilizando JWT (JSON Web Tokens).

## Como Iniciar o Projeto

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e configurado
- Prisma CLI instalado globalmente (`npm install -g prisma`)

### Passos para Iniciar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nest-to-do-list.git
    cd nest-to-do-list
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados PostgreSQL:
    - Crie um banco de dados PostgreSQL.
    - Configure a conexão com o banco de dados no arquivo `.env`:
      ```env
      DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome-do-banco"
      ```

4. Inicialize o Prisma:
    ```bash
    npx prisma init
    npx prisma migrate dev --name init
    ```

5. Inicie a aplicação:
    ```bash
    npm run start:dev
    ```

### Documentação da API

Para acessar a documentação da API, inicie a aplicaçã
