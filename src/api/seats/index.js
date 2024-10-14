import { host } from '../api'

export const getAllSeats = async () => {
  const response = await host
    .get('/api/seats/getallseats')
    .then(res => res.data)
    .catch(error => error)

  return response
}

export const getOneSeat = async id => {
  const response = await host
    .get(`/api/seats/getoneseat/${id}`)
    .then(res => res.data)
    .catch(error => error)

  return response
}
