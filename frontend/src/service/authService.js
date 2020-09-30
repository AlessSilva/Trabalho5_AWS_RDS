import api from './api'

const getSession = async () => {
  const session = await JSON.parse(localStorage.getItem('session'))
  return session
}

const getCurrentUser = async () => {
  const session = await getSession()
  return session.user
}

const signIn = async (userInfo) => {
  const { data } = await api.post('/users/login', userInfo)
  const { user, token } = data
  localStorage.setItem('session', JSON.stringify({ user, token }))
}

const signOut = async () => {
  localStorage.removeItem('session')
}

const signUp = async (userInfo) => {
  await api.post('/users', userInfo)
}

export default {
  getSession,
  getCurrentUser,
  signIn,
  signOut,
  signUp
}
