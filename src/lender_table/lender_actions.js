import ActionConstants from "../action_constants";

export const loadLenderRates = (lenders) => {
    return (dispatch) => {
        dispatch({
            type: ActionConstants.LOAD_LENDER_RATES,
            lenders: lenders
        })
    }
}