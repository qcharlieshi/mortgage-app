import ActionConstants from './filter_actions_constants'
import * as morgageApi from '../MorgageApi'
import {loadLenderRates} from "../lender_table/lender_actions";

export const getLenders = (configObj) => {
    return(dispatch) => {
        morgageApi.getLenders(configObj)
            .then(resp => {
                const requestId = resp.data.requestId
                console.log('---- getLenders', resp, requestId)

                getRates(requestId)
            })
            .catch(err => {
                console.log('ERROR: ', err)
            })
    }
}

export const getRates = (requestId) => {
    let finished = false;

    return(dispatch) => {
        while(!finished) {
            morgageApi.getRates(requestId)
                .then(resp => {
                    if (!resp.done) return

                    console.log('---- getRates', resp)
                    const lenderList = resp.data.rateQuotes
                    loadLenderRates(lenderList)
                })
                .catch(err => {
                    console.log('ERROR: ', err)
                })
        }
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