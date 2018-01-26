import { connect } from 'react-redux';
import MoviesComponent from '../components/MoviesComponent';
import { getPopular, getNowPlaying, getTopRated, getUpcoming } from '../api/api';
import { loadDataPopular, addFavoriteList, loadDataNowPlaying, loadDataTopRated, loadDataUpcoming } from '../actions/PopularActions';

const mapStateToProps = (state) => ({
    data: state.popularReducer.data,
    list: state.popularReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
    loadPopular: () => {
        getPopular(dispatch, loadDataPopular);
    },
    loadNowPlaying: () => {
        getNowPlaying(dispatch, loadDataNowPlaying);
    },
    loadTopRated: () => {
        getTopRated(dispatch, loadDataTopRated);
    },
    loadUpcoming: () => {
        getUpcoming(dispatch, loadDataUpcoming);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesComponent);