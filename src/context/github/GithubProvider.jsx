import GithubContext from './GithubContext'
import { useState } from 'react'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function GithubProvider({ children }) {
  // States 👇
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  // States 👆

  // Fetching Users from the Github API 👇
  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    })
    if (response.status == 200) {
      const data = await response.json()
      setUsers(data)
      setLoading(false)
    } else {
      setLoading(true)
    }
  }
  // Fetching Users from the Github API 👆

  // Values to be exported 👇
  const values = {
    users,
    loading,
    fetchUsers,
  }
  // Values to be exported 👆
  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  )
}

export default GithubProvider
