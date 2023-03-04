import {Button, Text, View} from "react-native";


export default function Welcome ({navigation}) {

    return (
        <View>
            <Text>Welcome</Text>
            <Button
                title="Go to Event"
                onPress={() =>
                    navigation.navigate('Event')
                }
            />

            <Button
                title="Go to Configuration"
                onPress={() =>
                    navigation.navigate('Configuration')
                }
            />
        </View>
    );
}