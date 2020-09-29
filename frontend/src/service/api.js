import axios from 'axios'
import authService from './authService'

const getAccessToken = async () => {
  const session = await authService.getSession()
  if (session) {
    const { token } = session
    console.log(token)
    return token
  }
  return ''
}

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3333'
})

api.interceptors.request.use(async (request) => {
  request.headers.authorization = await getAccessToken()
  console.log(request.headers.authorization)
  return request
})

export default api
