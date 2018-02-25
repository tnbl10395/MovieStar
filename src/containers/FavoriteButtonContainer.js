import { connect } from 'react-redux';
import FavoriteButtonComponent from '../components/FavoriteButtonComponent';
import { addFavoriteList,getFavoriteList,loadDataPopular, removeFavorite } from '../actions/PopularActions';
import { addFavorites,removeFavorites } from '../localDatabase/localdatabase';

const mapStateToProps = (state) => ({
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