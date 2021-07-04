import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../styles/global';

const ReviewDetails = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Text>{navigation.getParam('body')}</Text>
        </View>
    )
}

export default ReviewDetails;