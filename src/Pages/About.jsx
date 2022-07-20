function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search Github Profiles and see profile details. This
        project is part of the{' '}
        <strong>
          <a
            href='https://www.udemy.com/course/react-front-to-back-2022/'
            target='_blank'
            className= 'underline underline-offset-4'
          >
            React Front to Back 2022
          </a>{' '}
        </strong>
        Udemy course by
        <strong>
            {' '}
          <a href='https://traversymedia.com' target='_blank' className= 'underline underline-offset-4'>
            Brad Traversy
          </a>
        </strong>
      </p>
    </div>
  )
}

export default About
