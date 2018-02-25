import { connect } from 'react-redux';
import DetailFavoritesComponent from '../components/DetailFavoritesComponent';
import { getDetail, getCredit } from '../api/api';
import { addReminder, loadDataDetailFavorite, loadDataCreditFavorite } from '../actions/PopularActions';
import { addReminderList } from '../localDatabase/localdatabase';

const mapStateToProps = (state) => ({
    dataDetail: state.detailReducer.detailFavorite,
    dataCredit: state.detailReducer.creditFavorite,
    isDateTimePickerVisible: state.dataReducer.isDateTimePickerVisible
});

const mapDispatchToProps = (dispatch) => ({
    loadDetail: (id) => {
        getDetail(dispatch,loadDataDetailFavorite,id);
    },
    loadCredit: (id) => {
        getCredit(dispatch,loadDataCreditFavorite,id);
    },
    addReminder: (item) => {
        addReminderList(item,dispatch,addReminder);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailFavoritesComponent);