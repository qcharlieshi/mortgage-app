import ActionConstants from './filter_actions_constants'
import * as morgageApi from '../MorgageApi'

export const getLenders = (configObj) => {
    return(dispatch) => {
        morgageApi.getLenders(configObj)
            .then(resp => {
                console.log('---- getLenders', resp)
            })
            .catch(err => {

            })
    }
}

export const editField = (fieldName, value) => {
    return (dispatch) => {
        dispatch({
            type: ActionConstants.EDIT_FIELD,
            name: fieldName,
            value: value
        })
    }
}

export const loadLenders = (lenders) => {
    return (dispatch) => {
        dispatch({
            type: ActionConstants.LOAD_LENDERS,
            lenders: lenders
        })
    }
}