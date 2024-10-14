import { host } from '../api'

export const getShowToday = async () => {
  const response = await host.get('/api/shows/getshowtoday')
  return response
}


export const getOneShow = async id => {
  const response = await host.get(`/api/shows/getoneshow/${id}`)
  return response
}
