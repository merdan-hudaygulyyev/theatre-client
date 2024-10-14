import { host } from '../api'

export const getLastMonthRepertoire = async () => {
  const response = await host.get(`/api/repertoires/getlastmonth`)

  return response
}
