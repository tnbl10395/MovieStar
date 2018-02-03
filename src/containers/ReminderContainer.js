import { connect } from 'react-redux';
import ReminderComponent from '../components/ReminderComponent';
import { loadReminder } from '../actions/PopularActions';
import { getAllReminder } from '../localDatabase/localdatabase';


const mapStateToProps = (state) => ({
    data: state.popularReducer.reminder
});

const mapDispatchToProps = (dispatch) => ({
    loadReminder: () => {
        getAllReminder(dispatch,loadReminder);
    },
    removeReminder: () => {
        alert('ok')
        // removeReminderList(obj,dispatch,removeReminder)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReminderComponent);