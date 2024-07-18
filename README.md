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

-- Auth <br/>
[POST] http://localhost:3000/api/auth/new <br/>
[POST] http://localhost:3000/api/auth/login <br/>
[GET] http://localhost:3000/api/auth/logout <br/>
 
-- Membros <br/>
[GET] http://localhost:3000/api/members <br/>
[POST] http://localhost:3000/api/members/new <br/>
[GET] http://localhost:3000/api/members/member/:id <br/>
[PUT] http://localhost:3000/api/members/update/:id <br/>
[DELETE] http://localhost:3000/api/members/delete/:id <br/>
 
-- Tasks para membros <br/>
[GET] http://localhost:3000/api/member-task <br/>
http://localhost:3000/api/member-task/new <br/>
[PUT]http://localhost:3000/api/member-task/update/:id <br/>
 
-- Tasks <br/>
[GET] http://localhost:3000/api/tasks <br/>
[POST] http://localhost:3000/api/tasks/new <br/>
[GET] http://localhost:3000/api/tasks/task/:id <br/>
[PUT] http://localhost:3000/api/tasks/update/:id <br/>
[DELETE] http://localhost:3000/api/tasks/delete/:id <br/>


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

- Dotenv: Utilizado para criar variaveis de ambiente.