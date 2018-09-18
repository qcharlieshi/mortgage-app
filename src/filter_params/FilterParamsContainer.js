import {connect} from 'react-redux'
import FilterParms from './FilterParams'
import * as filterActions from './filter_actions'
import filter_reducer from "./filter_reducer";

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, filterActions)