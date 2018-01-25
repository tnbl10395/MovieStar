import { connect } from 'react-redux';
import FavoriteButtonComponent from '../components/FavoriteButtonComponent';
import { addFavoriteList,getFavoriteList,loadDataPopular } from '../actions/PopularActions';
import { AsyncStorage } from 'react-native';

async function addFavorites(obj,dispatch,getFavoriteList) {
    try{    
        var data = [];
        // alert(JSON.stringify(obj))
        // Object.assign(obj,{check:true});
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

const mapStateToProps = (state) => ({
    star1: state.popularReducer.star,
    // check: state.popularReducer.check
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: (object) => {
        addFavorites(object,dispatch,getFavoriteList)
    }
});

export default connect (mapStateToProps,mapDispatchToProps)(FavoriteButtonComponent);