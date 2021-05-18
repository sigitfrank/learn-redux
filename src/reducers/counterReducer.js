import counter from '../actionTypes/counterActionType'
const initialState = {
    value: 0
}

const counterReducer = (state = initialState, action) => {
    if (action.type === counter.INCREMENT)
        return { ...state, value: state.value + action.payload }
    if (action.type === counter.DECREMENT)
        return { ...state, value: state.value - 1 }
    return state
}

export default counterReducer