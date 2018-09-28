import ActionConstants from '../action_constants'
import * as morgageApi from '../morgage_api'
import {loadLenderRates, toggleLoad} from "../lender_table/lender_actions";

export const getLenders = (configObj) => {
    return(dispatch) => {
        dispatch(toggleLoad())

        morgageApi.fetchLenders(configObj)
            .then(resp => {
                const requestId = resp.data.requestId

                dispatch(getRates(requestId))
            })
            .catch(err => {
                dispatch(displayError(err.response.data.errors))
            })
    }
}

export const getRates = (requestId) => {
    return(dispatch) => {
        morgageApi.fetchRates(requestId)
            .then(resp => {
                const lenderList = resp.data.rateQuotes
                const done = resp.data.done

                if (!resp.data.done) {
                    console.log('---- getRates again')
                    //Timeout to prevent spamming the api
                    setTimeout(() => { dispatch(getRates(requestId)) }, 1000)
                    //return //adding this return will make it so the whole thing loads at once
                }

                dispatch(loadLenderRates(lenderList, done))
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

export const displayError = (err) => {
    return (dispatch) => {
        dispatch({
            type: ActionConstants.DISPLAY_ERROR,
            errorMessage: err
        })
    }
}