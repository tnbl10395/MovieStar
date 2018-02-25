import { connect } from 'react-redux';
import { Avatar } from '../templates/Avatar';
import { changeName, changeSex, changeEmail, changeBirthday, changeAvatar } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    data: state.profileReducer.profile,
    avatar: state.profileReducer.avatar,
    name: state.profileReducer.name,
    sex: state.profileReducer.sex,
    email: state.profileReducer.email,
    birthday: state.profileReducer.birthday

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