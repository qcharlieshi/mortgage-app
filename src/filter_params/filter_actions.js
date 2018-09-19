import ActionConstants from './filter_actions_constants'
import * as morgageApi from '../MorgageApi'
import {loadLenderRates} from "../lender_table/lender_actions";

export const getLenders = (configObj) => {
    return(dispatch) => {
        morgageApi.fetchLenders(configObj)
            .then(resp => {
                const requestId = resp.data.requestId
                console.log('---- fetchLenders', resp, requestId)

                dispatch(getRates(requestId))
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
    }
}

export const getRates = (requestId) => {
    let finished = false;

    return(dispatch) => {
        morgageApi.fetchRates(requestId)
            .then(resp => {
                const lenderList = resp.data.rateQuotes

                if (!lenderList.length) {
                    dispatch(getRates(requestId));
                }

                finished = true
                dispatch(loadLenderRates(lenderList))
            })
            .catch(err => {
                console.log('ERROR: ', err)
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