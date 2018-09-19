import {connect} from 'react-redux'
import LenderTable from './LenderTable'

const mapStateToProps = (state) => {
    return {
        lenders: state.lenderTable.lenders,
        done: state.lenderTable.done
    }
}

export default connect(mapStateToProps, {})(LenderTable)