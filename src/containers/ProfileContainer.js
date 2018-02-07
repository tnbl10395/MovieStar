import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import { goProfile } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    status: state.popularReducer.goProfile,
    data: state.popularReducer.profile,
});

const mapDispatchToProps = (dispatch) => ({
    goHome: () => {
        dispatch(goProfile());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);