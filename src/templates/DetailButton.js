import React from 'react';
import { TouchableWithoutFeedback, View, Image, Text } from 'react-native';
import { infoBox } from '../templates/ItemList';

export const DetailButton = ({navigation,item}) => (
    <TouchableWithoutFeedback
        onPress={()=>goDetailComponent(navigation,item.id)}>
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                style={{ height: 200, margin: 5, flex: 0.4 }}
            />
            <View style={{ flex: 0.6 }}>
                {infoBox(item)}
                <View>
                    <Text style={{ color: 'red' }}>Overview:</Text>
                    <Text style={{ color: 'black' }}>{item.overview}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
)

const goDetailComponent = (navigation,id)=>{
    navigation.navigate('Detail',{name:id})
}
