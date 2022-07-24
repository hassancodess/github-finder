import { FaUsers, FaUserFriends, FaCodepen, FaStore } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import { useParams } from 'react-router-dom'
import Spinner from '../components/shared/Spinner'
import { Link } from 'react-router-dom'
import RepoList from '../components/repos/RepoList'
function User() {
  const { user, getUser, userRepos, loading, getUserRepos } =
    useContext(GithubContext)
  const params = useParams()
  // UseEffect START
  useEffect(() => {
    getUser(params.login)
    getUserRepos(params.login)
  }, [])
  // UseEffect END
  // User Destructuring START
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user
  // User Destructuring END

  if (loading) {
    return (
      <div className='container mx-auto flex justify-center '>
        <Spinner />
      </div>
    )
  }

  return (
    <div className='w-full mx-auto lg:10/12'>
      <div className='mb-4'>
        <Link to='/' className='btn btn-ghost'>
          Back to Search
        </Link>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
        <div className='custom-card-image mb-6 md:mb-0'>
          <div className='rounded-lg shadow-xl card image-full'>
            <figure>
              <img src={avatar_url} alt='Profile Image' />
            </figure>
            <div className='card-body justify-end '>
              <h2 className='card-title mb-0'>{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='mb-6'>
            <h1 className='text-3xl card-title'>
              {name}
              <div className='ml-2 mr-1 badge badge-success'>{type}</div>
              {hireable && (
                <div className='mx-1 badge badge-info'>Hireable</div>
              )}
            </h1>
            <p>{bio}</p>
            <div className='mt-4 card-actions'>
              <a
                href={html_url}
                target='_blank'
                rel='noreferrer'
                className='btn btn-outline'
              >
                Visit Github Profile
              </a>
            </div>
          </div>
          <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
            {location && (
              <div className='stat'>
                <div className='stat-title text-md'>Location</div>
                <div className='stat-value text-lg'>{location}</div>
              </div>
            )}
            {blog && (
              <div className='stat'>
                <div className='stat-title text-md'>Website</div>
                <div className='stat-value text-lg'>
                  <a href={`https://${blog}`} target='_blank' rel='noreferrer'>
                    {blog}
                  </a>
                </div>
              </div>
            )}
            {twitter_username && (
              <div className='stat'>
                <div className='stat-title text-md'>Twitter</div>
                <div className='stat-value text-lg'>
                  <a
                    href={`https://www.twitter.com/${twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
        {/* Followers */}
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaUsers className='text-3xl md:text-5xl' />
          </div>
          <div className='stat-title pr-5'>Followers</div>
          <div className='stat-value pr-5 text-3xl md:text-4xl'>
            {followers}
          </div>
        </div>
        {/* Following */}
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaUserFriends className='text-3xl md:text-5xl' />
          </div>
          <div className='stat-title pr-5'>Following</div>
          <div className='stat-value pr-5 text-3xl md:text-4xl'>
            {following}
          </div>
        </div>
        {/* Repos */}
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaCodepen className='text-3xl md:text-5xl' />
          </div>
          <div className='stat-title pr-5'>Public Repos</div>
          <div className='stat-value pr-5 text-3xl md:text-4xl'>
            {public_repos}
          </div>
        </div>
        {/* Public Gists */}
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaStore className='text-3xl md:text-5xl' />
          </div>
          <div className='stat-title pr-5'>Public Gists</div>
          <div className='stat-value pr-5 text-3xl md:text-4xl'>
            {public_gists}
          </div>
        </div>
      </div>
      <RepoList repos={userRepos} />
      {/* New CARD */}
      {/* <div class='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={avatar_url} alt='Album' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>
            {name} <span className='text-gray-600'>@{login}</span>
            <span class='badge badge-success'>{type}</span>
            {hireable && <span class='badge badge-info'>Hireable</span>}
          </h2>
          <p>{bio}</p>
          <div class='card-actions justify-end'>
            <a href={html_url} rel='noreferrer' target='_blank'>
              <button class='btn btn-primary'>Visit Github Profile</button>
            </a>
          </div>
        </div>
      </div> */}
      {/* New CARD */}
    </div>
  )
}

export default User
