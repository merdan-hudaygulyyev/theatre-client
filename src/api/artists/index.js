import { host } from '../api'

export const getAllArtists = async (props) => {
  const {page, sort, order, degree, search, limit} = props
  const response = await host.get(`/api/artists/getallartists`, {
      params: {page, limit, sort, order, degree, search},
      headers: {
        'Content-Type': 'application/json',
      }
    })

  return response
}

export const getOneArtist = async id => {
  const response = await host.get(`/api/artists/getoneartist/${id}`)

  return response
}
