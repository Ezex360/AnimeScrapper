import * as animeController from '../../controllers/anime'

const resolvers = {
  Anime: {
    info: ({ title }) => animeController.getAnimeInfo('', { title })
  },
  Query: {
    animes: animeController.getRecentAnimes,
    animeInfo: animeController.getAnimeInfo
  }
}

export default resolvers
