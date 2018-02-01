import React from 'react';
import { View, FlatList, Image, Text, Dimensions } from 'react-native';
const {width,height} = Dimensions.get('window');

export const CreditMovie = ({credit}) => (
    <View style={{flex:0.4,backgroundColor:'white'}}>
        <Text style={{color:'black', fontWeight:'bold',fontSize:20, marginLeft:5}}>Cast & Crew</Text>
        <FlatList
            data={credit}
            renderItem={({item})=>ListCredit(item)}
            keyExtractor={(item,index)=>item.id}
            horizontal={true}
        />
    </View>
)

const ListCredit = (item) => (
    <View key={item.id} style={{margin:5}}>
        {
            item.profile_path!=null?
            <Image
                source={{uri:'http://image.tmdb.org/t/p/w185'+item.profile_path}} 
                style={{width:width*0.2,height:height*0.15}}
            />
            :
            <Image
                source={require('../images/user.png')} 
                style={{width:width*0.2,height:height*0.15}}
            />  
        }
        <View style={{width:width*0.2}}>
            <Text style={{color:'black',textAlign:'center'}}>{item.name}</Text>
        </View>
    </View>
)