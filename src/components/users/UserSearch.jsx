import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
  const [text, setText] = useState('')
  const [alertHidden, setAlertHidden] = useState(true)

  const { searchUsers } = useContext(GithubContext)

  const handleTextChange = (e) => {
    setText(e.target.value)
    if (e.target.value.length > 0) {
      setAlertHidden(true)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (text == '') {
      setAlertHidden(false)
    } else {
      setAlertHidden(true)
      searchUsers(text)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col items-center gap-4'>
        <div className='form-control w-1/2'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Search…'
              className='input w-full max-w-2xl input-bordered'
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
        <div
          className={`alert alert-error shadow-lg w-1/3 h-12 ${
            alertHidden && 'hidden'
          }`}
        >
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current flex-shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>Error! Please Enter Something.</span>
          </div>
        </div>
      </div>
    </form>
  )
}

export default UserSearch
