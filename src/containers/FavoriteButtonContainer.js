import { connect } from 'react-redux';
import FavoriteButtonComponent from '../components/FavoriteButtonComponent';
import { addFavoriteList,getFavoriteList,loadDataPopular, removeFavorite } from '../actions/PopularActions';
import { AsyncStorage } from 'react-native';

async function addFavorites(obj,dispatch,getFavoriteList) {
    try{    
        var data = [];
        Object.assign(obj,{check: require('../images/star.png')});
        await AsyncStorage.setItem('"'+obj.id+'"',JSON.stringify(obj));
        var keys = await AsyncStorage.getAllKeys();
        // await AsyncStorage.multiRemove(keys);
        await AsyncStorage.multiGet(keys,(err,stores)=>{
            stores.forEach(element=> {
                data.push(JSON.parse(element[1]));
            });
            dispatch(addFavoriteList(obj,data))
        })
    }catch(error){
            alert(error)
    }
}


async function removeFavorites(obj,dispatch,removeFavorite) {
    try{    
        var data = [];
        Object.assign(obj,{check: require('../images/star-outline.png')});
        await AsyncStorage.removeItem('"'+obj.id+'"');
        var keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiGet(keys,(err,stores)=>{
            stores.forEach(element=> {
                data.push(JSON.parse(element[1]));
            });
            dispatch(removeFavorite(obj,data))
        })
    }catch(error){
            alert(error)
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: (object) => {
        addFavorites(object,dispatch,getFavoriteList)
    },
    removeFavorite: (object) => {
        removeFavorites(object,dispatch,removeFavorite)
    }
});

export default connect (mapStateToProps,mapDispatchToProps)(FavoriteButtonComponent);