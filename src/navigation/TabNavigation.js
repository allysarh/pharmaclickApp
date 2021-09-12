import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Tab = createBottomTabNavigator()

const TabNavigation = (props) => {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName;
                        // mengarah pada name dari routing page nya
                        if (route.name === "Home") {
                            iconName = "home"
                        } else if (route.name === "Cart") {
                            iconName = "shopping-bag"
                        } else if (route.name === "Profile") {
                            iconName = "user"
                        }
                        return <Icon type="feather" name={iconName} size={25} color={color} />
                    }
                })
            }

            // tabBarOptions={{
            //     activeTintColor: '#0057a4',
            //     showLabel: false
            // }}

            screenOptions={{
                tabBarActiveTintColor: '#0057a4',
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen name="Home" component={HomePage} />
        </Tab.Navigator>
    )
}

export default TabNavigation