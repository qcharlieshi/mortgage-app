import reducer, {initialState} from './lender_reducer'
import * as actions from './lender_actions'
import ActionConstants from '../action_constants'

test('Reducer returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
})

test('Can load lenders', () => {
    const loadAction = {
        type: ActionConstants.LOAD_LENDER_RATES,
        lenders: ['test', 'test', 'test'],
        done: false
    }

    expect(reducer({}, loadAction)).toEqual({"lenders": ["test", "test", "test"]})
})