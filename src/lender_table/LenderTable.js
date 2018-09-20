import React, {Component} from 'react'

const NO_RESULTS = 'Press \'Quote Rates\' to find rates'

export default class LenderTable extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        //this will break on edge cases but will serve our purposes for now
        //however it should be fairly robust since due to the streaming nature it should
        //always reset itself back to 0 and climb up.
        const unequalNumLenders = nextProps.lenders.length !== this.props.lenders.length

        if (unequalNumLenders || nextProps.done !== this.props.done) return true
        else return false
    }

    generateTableRow(lenderData, idx) {
        const {lenderName, loanType, interestRate, closingCosts, monthlyPayment, apr} = lenderData
        const roundedAPR = Math.round(apr * 100) / 100

        return (
            <tr key={idx}>
                <td>{lenderName}</td>
                <td>{loanType}</td>
                <td>{interestRate}%</td>
                <td>${closingCosts}</td>
                <td>${monthlyPayment}</td>
                <td>{roundedAPR}%</td>
            </tr>
        )
    }
    render() {
        const hasLenders = this.props.lenders.length > 0

        return (
            <div style={{marginTop: '20px'}}>
                {
                    !this.props.done ? <div><img className="loading" src="loading.svg" /></div> : null
                }
                <table>
                    <thead>
                        <tr>
                            <th>Lender</th>
                            <th>Product</th>
                            <th>Rate</th>
                            <th>Closing Costs</th>
                            <th>Monthly Payment</th>
                            <th>APR</th>
                        </tr>
                    </thead>
                    <tbody>
                        { hasLenders ?
                            this.props.lenders.map(this.generateTableRow) : null
                        }
                    </tbody>
                </table>

                <span className="no-results">{!hasLenders ? NO_RESULTS : null}</span>
            </div>
        )
    }

}