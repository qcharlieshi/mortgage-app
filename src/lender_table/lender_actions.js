import ActionConstants from "../filter_params/filter_actions_constants";

export const loadLenderRates = (lenders) => {
    return (dispatch) => {
        dispatch({
            type: ActionConstants.LOAD_LENDER_RATES,
            lenders: lenders
        })
    }
}