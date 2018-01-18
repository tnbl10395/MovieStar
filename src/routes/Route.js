import React from 'react';
import { View,Dimensions } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import MoviesContainer from '../containers/MoviesContainer';
import FavoritesComponent from '../components/FavoritesComponent';
import SettingsComponent from '../components/SettingsComponent';
import AboutComponent from '../components/AboutComponent';
import ProfileComponent from '../components/ProfileComponent';
import { Avatar } from '../templates/Avatar';
import { Reminder, ReminderList } from '../templates/ReminderList';
import { EditButton } from '../templates/EditButton';
import { connect } from 'react-redux';

const {width,height} = Dimensions.get('window');

export const TabComponent = TabNavigator(
    {
        Movies: {
            screen: MoviesContainer
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
        initialRouteName: 'Home',
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

const mapStateToProps = (state) => ({
    nav: state.nav
})

const AppWithNavigationState = ({dispatch,nav}) => (
    <DrawComponent navigation={addNavigationHelpers({dispatch,state:nav})}/>
);
export default connect (mapStateToProps)(AppWithNavigationState);