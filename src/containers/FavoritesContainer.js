import { connect } from 'react-redux';
import FavoritesComponent from  '../components/FavoritesComponent';
import { getFavoriteList } from '../actions/PopularActions';
import { AsyncStorage } from 'react-native';

async function getAllFavorites(dispatch,getFavoriteList) {
    try{    
        var data = [];
        var keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiGet(keys,(err,stores)=>{
            stores.forEach(element=> {
                data.push(JSON.parse(element[1]));
            });
            dispatch(getFavoriteList(data))
        })
    }catch(error){
        alert(error)
    }
}

const mapStateToProps = (state) => ({
    favoriteData: state.popularReducer.favoriteList
});

const mapDispatchToProps = (dispatch) => ({
    getFavoriteData: () => {
        getAllFavorites(dispatch,getFavoriteList)
    }
});

export default connect (mapStateToProps,mapDispatchToProps) (FavoritesComponent);