import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero content'>
        <div className='max-w-lg'>
          <p className='text-8xl font-bold mb-8'>Oops!</p>
          <p className='text-5xl mb-8'>404 - Page Not Found</p>
          <Link to='/' className='btn btn-primary btn-lg'>
            <FaHome className='mr-2' /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
