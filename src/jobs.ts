import { api } from './config/api/api';

export const getFilms = async () => {
    const response = await api.get('/films');
    console.log(response.data);
};
