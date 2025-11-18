import { createContext, useContext, useEffect, useReducer } from 'react'

const INITIL_STATE = {
  user: JSON.parse(sessionStorage.getItem('user')) || '',
  loading: false,
  err: false,
}
export const AuthContext = createContext(INITIL_STATE)
const authReducer = (state, action) => {
  switch (action?.type) {
    case 'AUTH_START':
      return {
        user: null,
        loading: true,
        err: false,
      }
    case 'AUTH_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        err: false,
      }
    case 'AUTH_FAIL':
      return { user: null, loading: false, err: action.payload }
    case 'UPDATE_START':
      return {
        ...state,
        user: state.user,
        loading: true,
        err: false,
      }
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
        err: false,
      }
    case 'UPDATE_FAIL':
      return {
        ...state,
        user: null,
        loading: false,
        err: action.payload,
      }
    case 'LOG_OUT':
      return { user: null, loading: false, err: false }
    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIL_STATE)

  useEffect(() => {
    const userData = sessionStorage.getItem('user')
    try {
      if (userData !== undefined) {
        sessionStorage.setItem('user', JSON.stringify(state?.user || null))
      }
    } catch (err) {}
  }, [state.user, state])

  return (
    <AuthContext.Provider
      value={{
        user: state?.user,
        loading: state?.loading,
        err: state?.err,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useStateContextAuth = () => useContext(AuthContext)
export default AuthContextProvider
