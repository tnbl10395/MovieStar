import { connect } from 'react-redux';
import MoviesComponent from '../components/MoviesComponent';
import { getPopular } from '../api/api';
import { loadDataPopular, addFavoriteList } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    data: state.popularReducer.data,
    list: state.popularReducer.list,
    star: state.popularReducer.star
});

const mapDispatchToProps = (dispatch) => ({
    loadData: () => {
        getPopular(dispatch,loadDataPopular);
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(MoviesComponent);