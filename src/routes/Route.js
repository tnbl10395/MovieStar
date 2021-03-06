import React from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity, } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import MoviesContainer from '../containers/MoviesContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import SettingsContainer from '../containers/SettingsContainer';
import AboutComponent from '../components/AboutComponent';
import ProfileContainer from '../containers/ProfileContainer';
import DetailMoviesContainer from '../containers/DetailMoviesContainer';
import DetailFavoritesContainer from '../containers/DetailFavoritesContainer';
import ReminderContainer from '../containers/ReminderContainer';
import Avatar from '../containers/AvatarContainer';
import ReminderList from '../containers/ReminderListContainer';
import EditButton from '../containers/EditButtonContainer';
import NotificationFavorite from '../containers/NotificationContainer';
import { connect } from 'react-redux';
import NotificationContainer from '../containers/NotificationContainer';

const { width, height } = Dimensions.get('window');

export const MoviesStack = StackNavigator({
    Movies: {
        screen: MoviesContainer,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: DetailMoviesContainer,
        navigationOptions: {
            header: null
        }
    }
})

export const FavoritesStack = StackNavigator({
    Favorites: {
        screen: FavoritesContainer,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: DetailFavoritesContainer,
        navigationOptions: {
            header: null
        }
    }
})

export const TabComponent = TabNavigator(
    {
        Movies: {
            screen: MoviesStack,
            navigationOptions: {
                tabBarLabel: 'Movies',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/home.png')}
                    />
                ),
            }
        },
        Favorites: {
            screen: FavoritesStack,
            navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image
                            source={require('../images/heart.png')}
                        />
                        <NotificationContainer />
                    </View>
                ),
            }
        },
        Settings: {
            screen: SettingsContainer,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image
                            source={require('../images/settings.png')}
                        />
                    </View>
                ),
            }
        },
        About: {
            screen: AboutComponent,
            navigationOptions: {
                tabBarLabel: 'About',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Image
                            source={require('../images/information.png')}
                        />
                    </View>
                ),
            }
        },
    }, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#2980b9',
                top: '2%',
            },
            iconStyle:{
                width:'100%',
                height:40,
                top: '2%',
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
            screen: ProfileContainer
        },
        Home: {
            screen: TabComponent
        },
        Reminder: {
            screen: ReminderContainer,
            navigationOptions: {
                title: 'Reminders'
            }
        }
    }, {
        initialRouteName: 'Home',
        drawerPosition: 'left',
        drawerWidth: width * 0.8,
        contentComponent: ({ navigation }) => (
            <View style={{ top: '1%' }}>
                <Avatar />
                <EditButton navigation={navigation} />
                <ReminderList navigation={navigation} />
            </View>
        ),
    }
);
