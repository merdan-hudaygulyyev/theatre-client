import { host } from '../api'

export const getAllNews = async (props) => {
  const {page, limit, sort, order, search} = props
  const response = await host.get(`/api/news/getallnews`, {
      params: {page, limit, sort, order, search},
      headers: {
        'Content-Type': 'application/json',
      }
    })

  return response
}

export const getOneNew = async id => {
  const response = await host.get(`/api/news/getonenew/${id}`)

  return response
}

