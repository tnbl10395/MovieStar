import { connect } from 'react-redux';
import { Avatar } from '../templates/Avatar';
import { changeName, changeSex, changeEmail, changeBirthday, changeAvatar } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    data: state.popularReducer.profile,
    avatar: state.popularReducer.avatar,
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
    changeEmail: (email) => {
        dispatch(changeEmail(email))
    },
    changeAvatar: (avatar) => {
        dispatch(changeAvatar(avatar))

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);