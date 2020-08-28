import * as animeController from '../../controllers/anime'

const resolvers = {
  Query: {
    animes: animeController.getRecentAnimes
  }
}

export default resolvers
