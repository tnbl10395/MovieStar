import { connect } from 'react-redux';
import { EditButton } from '../templates/EditButton';
import { goProfile } from '../actions/PopularActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    goProfile: () => {
        dispatch(goProfile());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);