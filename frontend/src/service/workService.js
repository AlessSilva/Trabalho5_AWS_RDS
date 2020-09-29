import api from './api'

const get = async (userId) => {
  const { data } = await api.post(`/users/${userId}/work`, userId)
  console.log(data)
  return data
}

const save = async (work) => {
  const { data } = await api.post('/users/login', save)
  const { user, token } = data
  localStorage.setItem('session', JSON.stringify({ user, token }))
}

export default {
  get,
  save
}
