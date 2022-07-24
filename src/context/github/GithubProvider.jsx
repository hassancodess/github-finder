import GithubContext from './GithubContext'
import GithubReducer from './GithubReducer'
import { useReducer } from 'react'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function GithubProvider({ children }) {
  const initialState = {
    users: [],
    user: {},
    userRepos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // Search Users from the Github API 👇
  const searchUsers = async (text) => {
    setLoading()
    const params = new URLSearchParams({
      q: text,
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    })
    if (response.status == 200) {
      const { items } = await response.json()
      dispatch({
        type: 'GET_USERS',
        payload: items,
      })
    }
  }
  // Search Users from the Github API 👆

  // Get Single User
  const getUser = async (login) => {
    setLoading()

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    })
    if (response.status == 200) {
      const data = await response.json()
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    } else if (response.status !== 200) {
      window.location = '/notfound'
    }
  }
  // Get Single

  // Get User Repos
  const getUserRepos = async (login) => {
    setLoading()
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `${GITHUB_TOKEN}`,
        },
      }
    )
    if (response.status == 200) {
      const data = await response.json()
      dispatch({
        type: 'GET_USER_REPOS',
        payload: data,
      })
    }
  }
  // Get User Repos

  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  // Values to be exported 👇
  const values = {
    users: state.users,
    user: state.user,
    userRepos: state.userRepos,
    loading: state.loading,
    getUser,
    searchUsers,
    getUserRepos,
  }
  // Values to be exported 👆
  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  )
}

export default GithubProvider
