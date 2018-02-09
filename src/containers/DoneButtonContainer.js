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
    avatar: state.popularReducer.avatar,
    name: state.popularReducer.name,
    birthday: state.popularReducer.birthday,
    email: state.popularReducer.email,
    sex: state.popularReducer.sex,
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