import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div class='card w-64 bg-base-100 shadow-xl'>
      <div class='card-body'>
        <div class='avatar justify-center'>
          <div class='w-20 rounded-xl'>
            <img src={avatar_url} />
          </div>
        </div>
        <h2 class='card-title justify-center'>{login}</h2>
        <div class='card-actions justify-center'>
          <button class='btn btn-primary btn-sm glass text-white'>
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
