import ActionConstants from '../action_constants'
import {OCCUPANCY_OPTIONS, PROPERTY_OPTIONS} from "./selection_constants";

export const initialState = {
    loanSize: 0,
    creditScore: 700,
    propertyType: PROPERTY_OPTIONS[0],
    occupancy: OCCUPANCY_OPTIONS[0]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionConstants.EDIT_FIELD:
            const newState = {
                ...state,
                [action.name]: action.value
            }

            return newState
        default:
            return state
    }
}