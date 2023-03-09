import {Button, Text, View} from "react-native";
import '../../styles/appStyles'
import {appStyles} from "../../styles/appStyles";

export default function Welcome ({navigation}) {

    return (
        <View style={appStyles.appContainer}>
            <Text>Welcome</Text>
            <Button title='Go to Event' onPress={() => {navigation.navigate('Event')}} />
            <Button title='Go to Configuration' onPress={() => {navigation.navigate('Configuration')}} />
            <Button title='Go to Monitor' onPress={() => {navigation.navigate('Monitor')}} />
            <Button title='Go to Dashboard' onPress={() => {navigation.navigate('Dashboard')}} />
            <Button title='Go to Report' onPress={() => {navigation.navigate('Report')}} />
        </View>
    );
}