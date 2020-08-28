import * as episodeController from '../../controllers/episode'

const resolvers = {
  Query: {
    episodeSources: episodeController.getAnimeEpisodeSources
  }
}

export default resolvers
