import { api } from './config/api/api';

export const getFilms = async () => {
    const response = await api.get('/films?limit=200');
    console.log(
        response.data.map((film: any) => {
            return {
                titulo: film.title,
                titulo_original: film.original_title,
                descricao: film.description,
                data_lancamento: film.release_date,
                pontuacao: film.rt_score,
            };
        })
    );
};
