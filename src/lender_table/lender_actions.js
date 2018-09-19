import ActionConstants from "../action_constants";

export const loadLenderRates = (lenders, done) => {
    console.log('--- loadLenderRates')
    return (dispatch) => {
        dispatch({
            type: ActionConstants.LOAD_LENDER_RATES,
            lenders: lenders
        })

        //toggle off loading indicator once complete
        if (done) {
            dispatch(toggleLoad())
        }
    }
}

export const toggleLoad = () => {
    return (dispatch) => {
        dispatch({
            type: ActionConstants.TOGGLE_LOAD
        })
    }
}