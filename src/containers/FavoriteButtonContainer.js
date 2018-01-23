import { connect } from 'react-redux';
import FavoriteButtonComponent from '../components/FavoriteButtonComponent';
import { addFavoriteList,getFavoriteList } from '../actions/PopularActions';
import { AsyncStorage } from 'react-native';

async function addFavorites(obj,dispatch,getFavoriteList) {
    try{    
        var data = [];
        await AsyncStorage.setItem('"'+obj.id+'"',JSON.stringify(obj));
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
    check: state.popularReducer.star
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: (object) => {
        addFavorites(object,dispatch,getFavoriteList)
    }
});

export default connect (mapStateToProps,mapDispatchToProps)(FavoriteButtonComponent);