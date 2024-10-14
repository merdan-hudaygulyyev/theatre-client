import { host } from '../api'

export const getGenreTypes = async () => {
  const response = await host.get('/api/types/genretypes')
    
  return response
}

export const getArtistDegrees = async () => {
  const response = await host.get('/api/types/artistdegrees')
  return response
}
