import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import { goProfile, changeBirthday } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    status: state.profileReducer.goProfile,
    data: state.profileReducer.profile,
});

const mapDispatchToProps = (dispatch) => ({
    goHome: () => {
        dispatch(goProfile());
    },
    changeBirthday: (birthday) => {
        dispatch(changeBirthday(birthday))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);