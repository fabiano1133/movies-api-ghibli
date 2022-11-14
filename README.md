# Movies API GUIBLI-API

API que starta um jobs que recupera uma lista de filmes da API da GUIBLI-API e grava em uma base de dados. Nesta API temos um endpoint que recupera uma lista de filmes da base de dados previamente populada pelo jobs. 

## Bibliotecas utilizadas no projeto
- [Axios](https://axios-http.com/docs/intro)
- [Cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Mongoose](https://mongoosejs.com/)
- [mongoose-paginate-v2](https://www.npmjs.com/package/mongoose-paginate-v2)
- [Eslint](https://eslint.org/docs/latest/developer-guide/nodejs-api)
- [Prettier](https://prettier.io/)

## Linguagem utilizada no projeto
- [Javascript - Node JS](https://nodejs.org/en/)
- [Superset Typescript](https://www.typescriptlang.org/)
## Ferramentas utilizadas no projeto
- [Visual Studio Code](https://code.visualstudio.com/Download)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)
- [Docker](https://www.docker.com/)
- [Insomnia](https://insomnia.rest/download)

## Passo 1 - Executando a Aplicação

- Acessar o repositório no Github: [repositório](https://github.com/fabiano1133/movies-api-ghibli)
- Clonar o repositório
- Acessar a pasta do projeto clonada em sua máquina
```bash
$ cd movies-api-ghibli
```
- Abrir a pasta do projeto em um editor de sua preferência.
Para exemplificar, utilizei o VS Code.
```bash
$ code .
```
- Executar o comando para instalar as dependências do projeto.
```bash
$ npm install ou yarn
```
- Executar o banco de dados
```bash
$ docker-compose up
```

- Executar a aplicação
```bash
$ yarn dev
```
## Passo 2 - Acessando a lista de Filmes

- Abrir o Insomnia ou outro client de sua preferência
- Acessar o endpoint 
- Método GET
```
http://localhost:3000/movies?limit=5&page=1
```
A rota utiliza recursos de paginação e exibe os 5 primeiros filmes da lista ordenados por ano de lançamento, do mais atual para o mais antigo.

- Resposta da Requisição

```
{
	"docs": [
		{
			"_id": "63722797b840a119d1ae08a3",
			"title": "Earwig and the Witch",
			"originalTitle": "アーヤと魔女",
			"description": "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
			"releaseDate": "2021",
			"rate_score": "30",
			"__v": 0
		},
		{
			"_id": "6372267e08bb64829ec21e34",
			"title": "Earwig and the Witch",
			"originalTitle": "アーヤと魔女",
			"description": "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
			"releaseDate": "2021",
			"rate_score": "30",
			"__v": 0
		},
		{
			"_id": "63722978abc252f9ec41390e",
			"title": "Earwig and the Witch",
			"originalTitle": "アーヤと魔女",
			"description": "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
			"releaseDate": "2021",
			"rate_score": "30",
			"__v": 0
		},
		{
			"_id": "637227a9e312b9654de58d76",
			"title": "Earwig and the Witch",
			"originalTitle": "アーヤと魔女",
			"description": "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
			"releaseDate": "2021",
			"rate_score": "30",
			"__v": 0
		},
		{
			"_id": "637226dcf7c8666f753dacac",
			"title": "Earwig and the Witch",
			"originalTitle": "アーヤと魔女",
			"description": "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
			"releaseDate": "2021",
			"rate_score": "30",
			"__v": 0
		}
	],
	"totalDocs": 814,
	"limit": 5,
	"totalPages": 163,
	"page": 1,
	"pagingCounter": 1,
	"hasPrevPage": false,
	"hasNextPage": true,
	"prevPage": null,
	"nextPage": 2
}
```