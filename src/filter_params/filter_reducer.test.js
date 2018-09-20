import reducer, {initialState} from './filter_reducer'
import * as actions from './filter_actions'
import ActionConstants from '../action_constants'
import {PROPERTY_OPTIONS} from "./selection_constants";

test('Reducer returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
})

test('Can edit property type', () => {
    const editAction = {
        type: ActionConstants.EDIT_FIELD,
        name: 'propertyType',
        value: PROPERTY_OPTIONS[0]
    }

    expect(reducer({}, editAction)).toEqual({"propertyType": "SingleFamily"})
})

test('Can edit loan size', () => {
    const editAction = {
        type: ActionConstants.EDIT_FIELD,
        name: 'loanSize',
        value: 50000
    }

    expect(reducer({}, editAction)).toEqual({"loanSize": 50000})
})
