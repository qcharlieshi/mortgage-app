import ActionConstants from '../action_constants'

export const initialState = {
    lenders: [],
    done: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionConstants.LOAD_LENDER_RATES:
            const newState = {
                ...state,
                lenders: action.lenders
            }

            return newState
        case ActionConstants.TOGGLE_LOAD:
            return {
                ...state,
                done: !state.done
            }
        default:
            return state
    }
}