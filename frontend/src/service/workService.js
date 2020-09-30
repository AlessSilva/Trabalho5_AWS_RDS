import api from './api'

const get = async (userId) => {
  const { data } = await api.get(`/users/${userId}/work`)
  return data
}

const save = async (work) => {
  const { data } = await api.post(`/users/${work.userId}/work`, work)
  return data
}

export default {
  get,
  save
}
