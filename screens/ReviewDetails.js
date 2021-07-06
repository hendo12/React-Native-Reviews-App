import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../styles/global';
import Card from '../shared/card';

const ReviewDetails = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
                <Text>{navigation.getParam('body')}</Text>
            </Card>
        </View>
    )
}

export default ReviewDetails;