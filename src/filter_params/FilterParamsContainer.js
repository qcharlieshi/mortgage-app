import {connect} from 'react-redux'
import FilterParms from './FilterParams'
import * as filterActions from './filter_actions'

const mapStateToProps = (state) => {
    return {
        loanSize: state.filter.loanSize,
        creditScore: state.filter.creditScore,
        propertyType: state.filter.propertyType,
        occupancy: state.filter.occupancy,
        errors: state.filter.errors,
        done: state.lenderTable.done
    }
}

export default connect(mapStateToProps, filterActions)(FilterParms)