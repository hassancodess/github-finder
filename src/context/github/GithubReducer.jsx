function GithubReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.payload, loading: false }
    case 'SET_LOADING':
      return { ...state, loading: true }
    case 'GET_USER':
      return { ...state, user: action.payload, loading: false }
    case 'GET_USER_REPOS':
      return { ...state, userRepos: action.payload, loading: false }
    default:
      return state
  }
}

export default GithubReducer
