Nome: Eduardo Katayama <br/>
Nome: Wilson M. U. Hiramatsu

Relatório Técnico


Requisitos
- Docker/Docker Compose

Instruções
- Baixar o projeto no GitHub (LINK ABAIXO)
- Acessar a pasta do projeto pelo terminal
- Rodar o comando do Docker >  docker-compose up
- Acessar a http://localhost:89

Link github
https://github.com/w4nh7u/tech-challenge-fase5
 - Este repositório contém todo o código-fonte dos serviços desenvolvidos.


Documentação das APIs
Endpoints para gerenciamento dos Locais

-- Auth
[POST] http://localhost:3000/api/auth/new
[POST] http://localhost:3000/api/auth/login
[GET] http://localhost:3000/api/auth/logout
 
-- Membros
[GET] http://localhost:3000/api/members
[POST] http://localhost:3000/api/members/new
[GET] http://localhost:3000/api/members/member/:id
[PUT] http://localhost:3000/api/members/update/:id
[DELETE] http://localhost:3000/api/members/delete/:id
 
-- Tasks para membros
[GET] http://localhost:3000/api/member-task
http://localhost:3000/api/member-task/new
[PUT]http://localhost:3000/api/member-task/update/:id
 
-- Tasks
[GET] http://localhost:3000/api/tasks
[POST] http://localhost:3000/api/tasks/new
[GET] http://localhost:3000/api/tasks/task/:id
[PUT] http://localhost:3000/api/tasks/update/:id
[DELETE] http://localhost:3000/api/tasks/delete/:id


Tecnologias e Ferramentas Utilizadas

- HTML: Utilizado para criar a estrutura básica da interface de usuário.

- JavaScript: Utilizado para a lógica de verificação de sobreposição de horários.

- CSS Utilizado para estilizar a interface de usuário, garantindo uma apresentação visual atraente e responsiva.

- Node.js: Utilizado para criar o backend e disponibilizar a API.

- Express.js.: Framework para Node.js que simplifica o desenvolvimento de APIs REST.

- Git: Controle de versão utilizado para gerenciar o código-fonte.

- Firebase: Banco de dados relacional utilizado para armazenar informações de forma estruturada e eficiente.

- React: Biblioteca JavaScript utilizada para construir interfaces de usuário interativas e dinâmicas.

- Material UI: Biblioteca de componentes de interface de usuário para React, que oferece uma ampla gama de elementos estilizados e prontos para uso, facilitando o desenvolvimento de uma interface moderna e responsiva.

- Docker: Plataforma de containers utilizada para criar, implantar e executar aplicações de forma isolada e consistente, garantindo que funcionem da mesma maneira em diferentes ambientes.




Desafios Encontrados e Soluções Implementadas

Implementar uma lógica robusta para verificação de sobreposição de horários.
Solução: Utilizamos a conversão de horários para minutos desde a meia-noite, o que facilitou a comparação dos intervalos de tempo.

Garantir que a interface do usuário seja intuitiva e fácil de usar.
Solução: Implementamos inputs de tipo "time" no HTML para facilitar a inserção de horários pelos usuários.

Validar os inputs de horário e fornecer feedback adequado ao usuário.
Solução: Adicionamos verificações para garantir que ambos os horários fossem fornecidos e retornamos mensagens apropriadas dependendo se a sobreposição foi detectada ou não.


