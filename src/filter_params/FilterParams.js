import React, {Component} from 'react'
import InputComponent from '../components/InputComponent'
import SelectComponent from '../components/SelectComponent'
import {OCCUPANCY_OPTIONS, PROPERTY_OPTIONS} from "./selection_constants";

export default class FilterParams extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        console.log('---- handleSubmit')
        const {propertyType, occupancy} = this.props
        const creditScore = Number(this.props.creditScore)
        const loanSize = Number(this.props.loanSize)

        const configObject = {
            loanSize,
            creditScore,
            propertyType,
            occupancy
        }

        this.props.getLenders(configObject)
    }

    render() {
        const {loanSize, propertyType, occupancy, creditScore, editField} = this.props

        return (
            <div className="filter-params">
                <InputComponent name="loanSize" value={loanSize} editField={editField} />
                <InputComponent name="creditScore" value={creditScore} editField={editField} />
                <SelectComponent name="propertyType" value={propertyType} options={PROPERTY_OPTIONS} editField={editField}/>
                <SelectComponent name="occupancy" value={occupancy} options={OCCUPANCY_OPTIONS} editField={editField}/>

                <div className="filter-button">
                    <button onClick={this.handleSubmit}>Quote Rates</button>
                </div>
            </div>
        )
    }

}
