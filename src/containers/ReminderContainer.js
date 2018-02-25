import { connect } from 'react-redux';
import ReminderComponent from '../components/ReminderComponent';
import { loadReminder, removeReminder } from '../actions/PopularActions';
import { getAllReminder, removeReminderList } from '../localDatabase/localdatabase';


const mapStateToProps = (state) => ({
    data: state.reminderReducer.reminder
});

const mapDispatchToProps = (dispatch) => ({
    removeReminder: (obj) => {
        removeReminderList(obj,dispatch,removeReminder)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderComponent);