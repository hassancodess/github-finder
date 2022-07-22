import GithubContext from './GithubContext'
import GithubReducer from './GithubReducer'
import { useReducer } from 'react'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function GithubProvider({ children }) {
  const initialState = {
    users: [],
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
        type: 'GET_USER',
        payload: items,
      })
    }
  }
  // Fetching Users from the Github API 👆
  const setLoading = () => dispatch({ type: 'SET_LOADING' })
  // Values to be exported 👇
  const values = {
    users: state.users,
    loading: state.loading,
    searchUsers,
  }
  // Values to be exported 👆
  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  )
}

export default GithubProvider
