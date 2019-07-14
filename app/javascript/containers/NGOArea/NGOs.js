import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNgos } from '../../actions/ngos';
import NGOs from '../../components/NGOArea/NGOs';

const mapStateToProps = state => state.ngos;

const mapDispatchToProps = dispatch => bindActionCreators({ fetchNgos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NGOs);
