# Bem vindo ao repositório do projeto API de Blogs

Este projeto é uma API de um CRUD posts de blog, foi desenvolvido utilizando o ORM Sequelize e seguindo os princípios do REST.

## Técnologias usadas

<section>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="js">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express">
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql">
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="orm">
</section>

## Instalando Dependências

Para instalar as dependencias:

```bash
cd project-BlogsAPI/
npm i
```

## Executando aplicação Local

**Aviso: para executar a API localmente é necessario ter o Docker/Docker-Compose instalado.**

### Passo 1 - Configurar as variaveis de ambiente

Na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo ficará desta forma:

```sh
PORT=5000
HOSTNAME=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
MYSQL_ROOT_PASSWORD=1234
MYSQL_DATABASE=blogs_api
```

**Nota**: A variável **PORT** do arquivo `.env` deve ser utilizada para a conexão com o servidor.

### Passo 2 - Executar o docker-compose para criar um banco de dados local

Para rodar o Docker:

  ```bash
  docker-compose up
  ```

### Passo 3 - Criar o banco de dados

Para criar o db com as tabelas e os dados:

  ```bash
  npx sequelize db:create
  ```

  ```bash
  npx sequelize db:migrate
  ```

  ```bash
  npx sequelize db:seed:all
  ```

## Testando

Para testar a API utilize o [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou qualquer outra ferramenta semelhante.

Em breve estarei publicando os testes unitarios, e uma documentação detalhando as rotas da API REST.
