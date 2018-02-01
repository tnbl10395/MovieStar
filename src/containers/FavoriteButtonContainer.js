import { connect } from 'react-redux';
import FavoriteButtonComponent from '../components/FavoriteButtonComponent';
import { addFavoriteList,getFavoriteList,loadDataPopular, removeFavorite } from '../actions/PopularActions';
import { addFavorites,removeFavorites } from '../localDatabase/localdatabase';

const mapStateToProps = (state) => ({
    // check: state.popularReducer.check
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: (object) => {
        addFavorites(object,dispatch,addFavoriteList)
    },
    removeFavorite: (object) => {
        removeFavorites(object,dispatch,removeFavorite)
    }
});

export default connect (mapStateToProps,mapDispatchToProps)(FavoriteButtonComponent);