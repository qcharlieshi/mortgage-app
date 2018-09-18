import {connect} from 'react-redux'
import FilterParms from './FilterParams'
import * as filterActions from './filter_actions'

const mapStateToProps = (state) => {
    return {
        loanSize: state.filter.loanSize,
        creditScore: state.filter.creditScore,
        propertyType: state.filter.propertyType,
        occupancy: state.filter.occupancy
    }
}

export default connect(mapStateToProps, filterActions)(FilterParms)