import { connect } from 'react-redux';
import DetailMoviesComponent from '../components/DetailMoviesComponent';
import { getDetail, getCredit } from '../api/api';
import { addReminder, loadDataDetailMovie, loadDataCreditMovie } from '../actions/PopularActions';
import { addReminderList } from '../localDatabase/localdatabase';

const mapStateToProps = (state) => ({
    dataDetail: state.detailReducer.detailMovie,
    dataCredit: state.detailReducer.creditMovie,
    isDateTimePickerVisible: state.dataReducer.isDateTimePickerVisible
});

const mapDispatchToProps = (dispatch) => ({
    loadDetail: (id) => {
        getDetail(dispatch,loadDataDetailMovie,id);
    },
    loadCredit: (id) => {
        getCredit(dispatch,loadDataCreditMovie,id);
    },
    addReminder: (item) => {
        addReminderList(item,dispatch,addReminder);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviesComponent);