import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const MoviesStyle = StyleSheet.create({
    overview: {
        flex: 1,
        backgroundColor: 'white'
    },
    indicator: {
        marginTop: 250
    }
});

export const ItemListStyle = StyleSheet.create({
    overviewList: {
        flexDirection: 'column',
        borderTopWidth: 0.5,
        height: 250
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginLeft: 5
    },
    body: {
        flexDirection: 'row'
    },
    poster: {
        height: 200,
        margin: 5,
        flex: 0.4
    },
    viewTextBody: {
        flex: 0.6
    },
    titleBody: {
        color: 'red'
    },
    textBody: {
        color: 'black'
    },
    viewInfoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleInfoBox: {
        fontSize: 18,
        color: 'black'
    },
    textInfoBox: {
        fontSize: 18,
        color: 'red'
    },
    overviewGrid: {
        flexDirection: 'column',
        height: 250,
        flex: 1,
        marginBottom: 20
    },
    posterGrid: {
        height: 200,
        margin: 5
    },
    titleGrid: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginLeft: 5,
        textAlign: 'center'
    }
});

export const HeaderStyle = StyleSheet.create({
    overview: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2980b9',
        paddingBottom: 10
    },
    btnProfile: {
        width: 40,
        height: 40,
        left: 25,
        top: 5
    },
    btnBack: {
        top: 5
    },
    textName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        top: 10,
        textAlign: 'center'
    },
    btnChangeList: {
        width: 40,
        height: 40,
        right: 25,
        top: 5
    },
});

export const ItemReminderStyle = StyleSheet.create({
    overview: {
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    poster: {
        height: 150,
        margin: 5,
        flex: 0.3
    },
    viewText: {
        justifyContent: 'space-around',
        flex: 0.7,
        marginLeft: 2
    },
    text: {
        fontSize: 24,
        color: 'black'
    },
    btnSwipe: {
        width: 50,
        top: '40%'
    }
});

export const ReminderListStyle = StyleSheet.create({
    overview: {
        marginTop: 15
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    },
    viewText: {
        backgroundColor: '#00BFA5',
        margin: 5,
        padding: 5
    },
    text: {
        fontSize: 18,
        color: 'black'
    },
    viewBtnShowAll: {
        alignItems: 'center',
        marginTop: 20
    },
    btnShowAll: {
        backgroundColor: '#303F9F',
        width: 110,
        borderRadius: 5
    },
    textBtnShowAll: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textCopyRight: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center'
    }
});

export const SearchBtnStyle = StyleSheet.create({
    overview: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    viewBtnSearch: {
        width: width * 0.98,
        height: 40,
        margin: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: width * 0.015,
    },
    btnShow: {
        width: width * 0.98,
        backgroundColor: '#fff',
        borderRadius: width * 0.015,
        alignItems: 'center'
    },
    btnHide: {
        width: width * 0.1,
        backgroundColor: '#fff',
        borderRadius: width * 0.015,
    },
    icon: {
        padding: 10,
    },
    textInput: {
        width: width * 0.82
    }
});

export const NotificationStyle = StyleSheet.create({
    overview: {
        backgroundColor: 'red',
        height: 25,
        width: 25,
        borderRadius: 50,
        position: 'absolute',
        bottom: 13,
        left: 15,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export const EditBtnStyle = StyleSheet.create({
    overview: {
        alignItems: 'center'
    },
    viewBtn: {
        backgroundColor: '#303F9F',
        width: 110,
        borderRadius: 5
    },
    textBtn: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export const DoneBtnStyle = StyleSheet.create({
    viewBtn: {
        backgroundColor: '#2196F3',
        width: 100,
        borderRadius: 5
    },
    textBtn: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5
    }
});

export const CancelBtnStyle = StyleSheet.create({
    viewBtn: {
        backgroundColor: '#4DB6AC',
        width: 100,
        borderRadius: 5
    },
    textBtn: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5
    }
});

export const DetailMovieStyle = StyleSheet.create({
    overview: {
        flex: 0.6,
        backgroundColor: 'white'
    },
    header: {
        flex: 0.2,
        flexDirection: 'row'
    },
    viewBtnFavorite: {
        justifyContent: 'center',
        margin: 10
    },
    body: {
        flex: 0.8,
        flexDirection: 'row'
    },
    viewPoster: {
        flex: 0.4
    },
    poster: {
        height: height * 0.25,
        margin: 10
    },
    viewBtnReminder: {
        backgroundColor: '#6c5ce7',
        borderRadius: 5,
        margin: 10
    },
    textBtnReminder: {
        padding: 5,
        color: 'white',
        textAlign: 'center'
    },
    viewContent: {
        flex: 0.6
    },
    titleContent: {
        color: 'red'
    },
    textContent: {
        color: 'black'
    },
    overviewCredit: {
        flex: 0.4,
        backgroundColor: 'white'
    },
    titleCredit: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5
    },
    viewListCredit: {
        margin: 5
    },
    imageActor: {
        width: width * 0.2,
        height: height * 0.15
    },
    viewNameActor: {
        width: width * 0.2
    },
    nameActor: {
        color: 'black',
        textAlign: 'center'
    }
});

export const DetailBtnStyle = StyleSheet.create({
    overview: {
        flexDirection: 'row'
    },
    poster: {
        height: 200,
        margin: 5,
        flex: 0.4
    },
    viewContent: {
        flex: 0.6
    },
    titleContent: {
        color: 'red'
    },
    textContent: {
        color: 'black'
    }
});