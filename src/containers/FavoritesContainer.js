import { connect } from 'react-redux';
import FavoritesComponent from  '../components/FavoritesComponent';
import { AsyncStorage } from 'react-native';
import { getAllFavorites } from '../localDatabase/localdatabase';
import { getFavoriteList } from '../actions/PopularActions';
const mapStateToProps = (state) => ({
    favoriteData: state.popularReducer.favoriteList,
});

const mapDispatchToProps = (dispatch) => ({
    getFavoriteData: () => {
        getAllFavorites(dispatch,getFavoriteList)
    }
});

export default connect (mapStateToProps,mapDispatchToProps) (FavoritesComponent);