import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import globalStyles from '../styles/global';
import Card from '../shared/card';

const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    console.log(reviews);

    return (
        <View style={globalStyles.container}>
            <FlatList  
                data={reviews}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    )
                }}
                // keyExtractor={({ item }) => item.title }
            />
        </View>
    )
}

export default Home;