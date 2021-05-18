import loggedIn from '../actionTypes/loggedInActionType'
const initialState = {
    isLoggedIn: false
}

const loggedInReducer = (state = initialState, action) => {
    if (action.type === loggedIn.LOGIN)
        return { ...state, isLoggedIn: true }
    if (action.type === loggedIn.LOGOUT)
        return { ...state, isLoggedIn: false }
    return state
}

export default loggedInReducer