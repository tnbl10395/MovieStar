import React from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity, } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import MoviesContainer from '../containers/MoviesContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import SettingsComponent from '../components/SettingsComponent';
import AboutComponent from '../components/AboutComponent';
import ProfileContainer from '../containers/ProfileContainer';
import DetailContainer from '../containers/DetailContainer';
import ReminderContainer from '../containers/ReminderContainer';
import Avatar from '../containers/AvatarContainer';
import ReminderList from '../containers/ReminderListContainer';
import EditButton from '../containers/EditButtonContainer';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

export const MoviesStack = StackNavigator({
    Movies: {
        screen: MoviesContainer,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: DetailContainer,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#2980b9',
            },
            headerTintColor: 'white'
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
        screen: DetailContainer,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#2980b9',
            },
            headerTintColor: 'white'
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
                        style={[{ tintColor: tintColor }, { width: 23, height: 23 }]}
                    />
                ),
            }
        },
        Favorites: {
            screen: FavoritesStack,
            navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/heart.png')}
                        style={[{ tintColor: tintColor }, { width: 23, height: 23 }]}
                    />
                ),
            }
        },
        Settings: {
            screen: SettingsComponent
        },
        About: {
            screen: AboutComponent
        },
    }, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#2980b9',
                top: '2%'
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
            <View style={{ top: '3%' }}>
                <Avatar />
                <EditButton navigation={navigation} />
                <ReminderList navigation={navigation} />
            </View>
        ),
    }
);



// const mapStateToProps = (state) => ({
//     nav: state.nav
// })

// const AppWithNavigationState = ({dispatch,nav}) => (
//     <TabComponent navigation={addNavigationHelpers({dispatch,state:nav})}/>
// );
// export default connect (mapStateToProps)(AppWithNavigationState);