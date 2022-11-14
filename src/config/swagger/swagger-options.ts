export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Movies API',
            version: '1.0.0',
            description:
                'API que starta um jobs que recupera uma lista de filmes da API da GHIBLI-API e grava em uma base de dados. Nesta API temos um endpoint que recupera uma lista de filmes da base de dados previamente populada pelo jobs.',
            contact: {
                name: 'Movies API GHIBLI-API',
                url: 'https://github.com/fabiano1133/movies-api-ghibli',
                email: 'fabiano.santos0@icloud.com',
            },
        },

        servers: [
            {
                url: 'http://localhost:3000',
                description: 'API Documentation',
            },
        ],
    },
    apis: ['./src/shared/http/routes/routes.ts'],
};
