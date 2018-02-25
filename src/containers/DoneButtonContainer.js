import { connect } from 'react-redux';
import { DoneButton } from '../templates/DoneButton';
import { AsyncStorage } from 'react-native';
import { editProfile, goProfile } from '../actions/PopularActions';

async function editProfileInStore(object, dispatch, editProfile) {
    try {
        await AsyncStorage.setItem('profile',JSON.stringify(object));
        var value = await AsyncStorage.getItem('profile');  
        dispatch(editProfile(JSON.parse(value)));
    } catch (error) {
        alert(JSON.stringify(error))
    }
}

const mapStateToProps = (state) => ({
    avatar: state.profileReducer.avatar,
    name: state.profileReducer.name,
    birthday: state.profileReducer.birthday,
    email: state.profileReducer.email,
    sex: state.profileReducer.sex,
})

const mapDispatchToProps = (dispatch) => ({
    editProfile: (object) => {
        editProfileInStore(object, dispatch, editProfile)
    },
    goHome: () => {
        dispatch(goProfile());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneButton);