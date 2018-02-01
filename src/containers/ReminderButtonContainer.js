import { connect } from 'react-redux';
import { ItemReminder } from '../templates/ItemReminder';
import { removeReminderList } from '../localDatabase/localdatabase';
import { removeReminder } from '../actions/PopularActions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    removeReminder: () => {
        alert('ok')
        // removeReminderList(obj,dispatch,removeReminder)
    }
})

export default connect (mapStateToProps, mapDispatchToProps)(ItemReminder);