import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import Alert from '../shared/Alert'

function UserSearch() {
  const [text, setText] = useState('')
  const [alert, setAlert] = useState(false)
  const errorMsg = 'Error! Please enter something.'
  const { searchUsers } = useContext(GithubContext)

  const handleTextChange = (e) => {
    setText(e.target.value)
    if (e.target.value.length > 0) {
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (text == '') {
      handleAlert()
    } else {
      searchUsers(text)
    }
  }
  const handleAlert = () => {
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 1000)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-center gap-4 mb-4'>
        <Alert msg={errorMsg} hidden={alert} />
        <div className='form-control w-1/2'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Search…'
              className='input w-full max-w-2xl input-bordered z-10'
              value={text}
              onChange={handleTextChange}
            />
            <button className='btn btn-square' type='submit'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default UserSearch
