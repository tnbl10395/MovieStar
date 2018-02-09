import { connect } from 'react-redux';
import { ReminderList } from '../templates/ReminderList';

const mapStateToProps = (state) => ({
    data: state.popularReducer.reminder,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);