import { host } from '../api'

export const getImagesForMoments = async () => {
  const response = await host.get(`/api/spectacles/getimagesformoments` )

  return response
}

export const getSpectaclesWithShows = async (props) => {
  const {page, sort, order, genre, search, dateSearch, limit, status} = props
  const response = await host.get(`/api/spectacles/getspectacleswithshows`, {
      params: {page, limit, sort, order, genre, search, dateSearch, status},
      headers: {
        'Content-Type': 'application/json',
      }
    })

  return response
}

export const getOneSpectacle = async id => {
  const response = await host.get(`/api/spectacles/getonespectacle/${id}`)

  return response
}

export const getSpectacleByShow = async (showId) => {
  const response = await host.get(`/api/ticket/getspectaclebyshow?showId=${showId}`).then(response => response.data)
  return response
}
export const getAllSpectaclesByShow = async (showId) => {
  const response = await host.get(`/api/ticket/getallseatsbyshow?showId=${showId}`).then(response => response.data)
  return response
}