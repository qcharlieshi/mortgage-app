import React, {Component} from 'react'

export default class LenderTable extends Component {
    constructor(props) {
        super(props);
    }

    generateTableRow(lenderData) {
        console.log('-- genTableRow', lenderData)

        return (
            <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
                <td>94</td>
            </tr>
        )
    }
    render() {
        console.log('---- render LenderTable', this.props.lenders)

        //Renders runs every time
        return (
            <div style={{marginTop: '20px'}}>
                <table>
                    <tr>
                        <th>Lender</th>
                        <th>Product</th>
                        <th>Rate</th>
                        <th>Closing Costs</th>
                        <th>Monthly Payment</th>
                        <th>APR</th>
                    </tr>
                    <tbody>
                        { this.props.lenders.map(this.generateTableRow) }
                    </tbody>
                </table>
            </div>
        )
    }

}