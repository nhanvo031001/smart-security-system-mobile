import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Configuration from "./components/Configuration";
import Event from "./components/Event";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('ok')
  return (
    // <View style={styles.container}>
    //   <Text>nhan vo ne 1a2</Text>
    //   <StatusBar style="auto" />
    // </View>

      <NavigationContainer>
        <Stack.Navigator
        >
          <Stack.Screen
              name="Home"
              component={Event}
              options={{title: 'Sự kiện'}}
          />
          <Stack.Screen name="Configuration" component={Configuration} />
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
