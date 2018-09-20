import React from 'react'
import {shallow} from 'enzyme'
import InputComponent from './InputComponent'
import runEnzyme from '../run_enzyme'

runEnzyme()

test('Renders label correctly', () => {
    const input = shallow(<InputComponent name={"testComp"}/>)
    expect(input.text()).toEqual('Test Comp:')
})

// test('Handles typing correctly', () => {
//     const input = shallow(<InputComponent name={"testComp"} value={"test"}/>)
//     console.log('----- ', input, input.text())
//     input.find('input').value('Test')
//
//     expect(input.text()).toEqual('Test')
// })