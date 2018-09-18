import ActionConstants from '../filter_params/filter_actions_constants'

const initialState = {
    lenders: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionConstants.LOAD_LENDER_RATES:
            const newState = {
                ...state,
                lenders: action.lenders
            }

            return newState
        default:
            return state
    }
}