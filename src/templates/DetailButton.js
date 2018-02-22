import React from 'react';
import { TouchableWithoutFeedback, View, Image, Text } from 'react-native';
import { infoBox } from '../templates/ItemList';
import { DetailBtnStyle } from '../style/Style';

export const DetailButton = ({ navigation, item }) => (
    <TouchableWithoutFeedback
        onPress={() => goDetailComponent(navigation, item.id)}>
        <View style={DetailBtnStyle.overview}>
            <Image
                source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                style={DetailBtnStyle.poster}
            />
            <View style={DetailBtnStyle.viewContent}>
                {infoBox(item)}
                <View>
                    <Text style={DetailBtnStyle.titleContent}>Overview:</Text>
                    <Text style={DetailBtnStyle.textContent}>{item.overview}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
)

const goDetailComponent = (navigation, id) => {
    navigation.navigate('Detail', { name: id })
}
