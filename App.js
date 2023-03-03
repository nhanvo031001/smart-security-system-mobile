import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Configuration from "./components/Configuration";
import Event from "./components/Event";
import Welcome from "./components/Welcome";
import EventDetail from "./components/EventDetail";

const Stack = createNativeStackNavigator();

export default function App() {
    console.log('ok')
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='StartScreen'
                screenOptions={({route, navigation}) => ({
                    headerTitleAlign: 'center',
                })}
            >
                <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Đăng nhập'}}/>
                <Stack.Screen name="Event" component={Event} options={{title: 'Sự kiện'}}/>
                <Stack.Screen name="EventDetail" component={EventDetail} options={{title: 'Chi tiết sự kiện'}}/>
                <Stack.Screen name="Configuration" component={Configuration} options={{title: 'Cấu hình'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
