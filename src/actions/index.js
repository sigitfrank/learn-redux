import counter from '../actionTypes/counterActionType'
import loggedIn from '../actionTypes/loggedInActionType'
export const increment = (number) => {
    // this return will forward to counterReducer that stored in store
    return {
        type: counter.INCREMENT,
        payload: number
    }
}
export const decrement = () => {
    return {
        type: counter.DECREMENT
    }
}

export const login = () => {
    return {
        type: loggedIn.LOGIN
    }
}

export const logout = () => {
    return {
        type: loggedIn.LOGOUT
    }
}