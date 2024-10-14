import axios from 'axios'
import SERVER_BASE_URL from '../utils/base_url'

const host = axios.create({
  baseURL: SERVER_BASE_URL,
})

export { host }