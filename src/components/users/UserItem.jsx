import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card w-64 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <div className='avatar justify-center'>
          <div className='w-20 rounded-xl'>
            <img src={avatar_url} />
          </div>
        </div>
        <h2 className='card-title justify-center'>{login}</h2>
        <div className='card-actions justify-center'>
          <button className='btn btn-secondary btn-sm text-white'>
            <Link to={`/users/${login}`}>View Profile</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object,
}

export default UserItem
