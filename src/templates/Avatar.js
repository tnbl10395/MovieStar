import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

export const Avatar = () => (
    <View>
        <View style={{alignItems:'center'}}>
            <Image
                source={require('../images/user.png')}
                style={{width:120,height:120,borderRadius:120}}
            />
            <Text style={{marginTop:15,color:'black',fontWeight:'bold',fontSize:24}}>Lewis</Text>
        </View>
        <View style={{margin:10}}>
            <View style={{flexDirection:'row',marginBottom:15}}>
                <Image
                    source={require('../images/cake-variant.png')}
                />
                <Text style={{color:'black',fontSize:20,marginLeft:20}}>1995-10-03</Text>
            </View>
            <View style={{flexDirection:'row',marginBottom:15}}>
                <Image
                    source={require('../images/email.png')}
                />
                <Text style={{color:'black',fontSize:20,marginLeft:20}}>lewis@enclave.vn</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Image
                    source={require('../images/account.png')}
                />
                <Text style={{color:'black',fontSize:20,marginLeft:20}}>Male</Text>
            </View>
        </View>
    </View>
);