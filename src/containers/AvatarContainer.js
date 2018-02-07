import { connect } from 'react-redux';
import { Avatar } from '../templates/Avatar';

const mapStateToProps = (state) => ({
    data: state.popularReducer.profile,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);