import React from 'react';
import { View,Dimensions } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import MoviesComponent from '../components/MoviesComponent';
import FavoritesComponent from '../components/FavoritesComponent';
import SettingsComponent from '../components/SettingsComponent';
import AboutComponent from '../components/AboutComponent';
import ProfileComponent from '../components/ProfileComponent';
import { Avatar } from '../templates/Avatar';
import { Reminder, ReminderList } from '../templates/ReminderList';
import { EditButton } from '../templates/EditButton';

const {width,height} = Dimensions.get('window');

export const TabComponent = TabNavigator(
    {
        Movies: {
            screen: MoviesComponent
        },
        Favorites: {
            screen: FavoritesComponent
        },
        Settings: {
            screen: SettingsComponent
        },
        About: {
            screen: AboutComponent
        },
    },{
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        tabBarOptions:{
            style:{
                backgroundColor: '#2980b9',
                top:'2%'
            },
            renderIndicator: () => null,
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
        },
      
    }
);

export const DrawComponent = DrawerNavigator(
    {
        Profile: {
            screen: ProfileComponent
        },
        Home: {
            screen: TabComponent
        },
    },{
        initialRouteName: 'Profile',
        drawerPosition:'left',
        drawerWidth:width*0.8,
        contentComponent: () => (
            <View style={{top:'3%'}}>
                <Avatar/>
                <EditButton/>
                <ReminderList/>
            </View>
        ),
    }
);


