import ActionConstants from './filter_actions_constants'

const initialState = {

}

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionConstants.EDIT_FIELD:
            return state
        default:
            return state
    }
}