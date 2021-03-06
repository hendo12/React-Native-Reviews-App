import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Modal, StyleSheet, 
TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../styles/global.js';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm';

const Home = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }

    console.log(reviews);

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                        />
                        <ReviewForm addReview={addReview} />
                        <Text>test</Text>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />
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

const styles = StyleSheet.create({
    modalContent: {
        marginTop: 30, 
        flex: 1
    }, 
    modalToggle: {
        marginBottom: 10,
        borderRadius: 10, 
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10, 
        alignSelf: 'center'
    }, 
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
});