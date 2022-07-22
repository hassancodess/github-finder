import AlertContext from './AlertContext'
import { useReducer } from 'react'
function AlertProvider({ children }) {
  const initialState = null
  const [state, dispatch] = useReducer(AlertContext, initialState)

  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    })

    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' })
    }, 2000)    
  }

  const values = { alert: state, setAlert }
  return (
    <AlertContext.Provider value={values}>{children}</AlertContext.Provider>
  )
}

export default AlertProvider
