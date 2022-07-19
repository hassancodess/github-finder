import { useEffect, useState } from 'react'
import Spinner from '../shared/Spinner'
function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchUsers()
  }, [])
  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `${import.meta.env.VITE_GITHUB_TOKEN}`,
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
  if (!loading) {
    return (
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8'>
        {users.map((user) => {
          return <h1>{user.login}</h1>
        })}
      </div>
    )
  } else {
    return (
      <div className='text-center'>
        <Spinner />
      </div>
    )
  }
}

export default UserResults
