import { connect } from 'react-redux';
import FavoriteButtonComponent from '../components/FavoriteButtonComponent';
import { addFavoriteList,getFavoriteList,loadDataPopular, removeFavorite } from '../actions/PopularActions';
import { addFavorites,removeFavorites } from '../localDatabase/localdatabase';
import { getPopular } from '../api/api';

const mapStateToProps = (state) => ({
    // check: state.popularReducer.check
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: (object) => {
        addFavorites(object,dispatch,addFavoriteList)
    },
    removeFavorite: (object,checkFavorite) => {
        removeFavorites(object,dispatch,removeFavorite,checkFavorite)
    },
});

export default connect (mapStateToProps,mapDispatchToProps)(FavoriteButtonComponent);