import { host } from '../api'

export const getAllBanners = async () => {
  const response = await host.get('/api/banners/getallbanners')
  return response
}
