import { connect } from 'react-redux';
import { Avatar } from '../templates/Avatar';
import { changeName, changeSex, changeEmail, changeBirthday } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    data: state.popularReducer.profile,
    name: state.popularReducer.name,
    sex: state.popularReducer.sex,
    email: state.popularReducer.email,
    birthday: state.popularReducer.birthday

});

const mapDispatchToProps = (dispatch) => ({
    changeName: (name) => {
        dispatch(changeName(name))
    },
    changeSex: (sex) => {
        dispatch(changeSex(sex))
    },
    changeBirthday: (birthday) => {
        dispatch(changeBirthday(birthday))
    },
    changeEmail: (email) => {
        dispatch(changeEmail(email))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);