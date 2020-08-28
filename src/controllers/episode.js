import API from 'animeflv-scrapper'

export const getAnimeEpisodeSources = (_, { index, title }) => API.getEpisodeVideos(index, title)
