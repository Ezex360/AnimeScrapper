import API from 'animeflv-scrapper'

export const getRecentAnimes = () => API.getAnimes({ page: 1 })

export const getAnimeInfo = (_, { title }) => API.getAnimeInfo(title)
