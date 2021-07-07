import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const header = ({ navigation, title }) => {
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" onPress={openMenu} size={32} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

export default header

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }
});