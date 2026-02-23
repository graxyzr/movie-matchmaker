import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';

const tvmazeApi = axios.create({
    baseURL: BASE_URL,
});

export const getPopularMovies = async (page = 1) => {
    try {
        // TVmaze começa na página 0
        const response = await tvmazeApi.get('/shows', {
            params: {
                page: page - 1
            }
        });

        // Transformar os dados para o formato esperado pelo app
        const results = response.data.map(show => ({
            id: show.id,
            Title: show.name,
            Year: show.premiered ? show.premiered.substring(0, 4) : 'Ano desconhecido',
            Poster: show.image?.original || show.image?.medium || null,
            Plot: show.summary?.replace(/<[^>]*>/g, '') || 'Sinopse não disponível para esta série.',
            imdbID: show.externals?.imdb || `tv-${show.id}`,
        }));

        return {
            results: results,
            total_pages: 20 // TVmaze tem muitas páginas
        };
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        throw error;
    }
};

export const getImageUrl = (poster) => {
    return poster || null;
};

export default tvmazeApi;