import { connect } from 'react-redux';
import DetailComponent from '../components/DetailComponent';
import { getDetail, getCredit } from '../api/api';
import { loadDataDetail, loadDataCredit, addReminder } from '../actions/PopularActions';
import { addReminderList } from '../localDatabase/localdatabase';

const mapStateToProps = (state) => ({
    dataDetail: state.popularReducer.detail,
    dataCredit: state.popularReducer.credit,
    isDateTimePickerVisible: state.popularReducer.isDateTimePickerVisible
});

const mapDispatchToProps = (dispatch) => ({
    loadDetail: (id) => {
        getDetail(dispatch,loadDataDetail,id);
    },
    loadCredit: (id) => {
        getCredit(dispatch,loadDataCredit,id);
    },
    addReminder: (item) => {
        addReminderList(item,dispatch,addReminder);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);