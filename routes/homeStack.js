import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home';
import ReviewDetails from "../screens/ReviewDetails";
import Header from '../shared/header';
import React from "react";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="GameZone" />,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#eee', 
            height: 100, 
        }
    }
});

export default HomeStack; 