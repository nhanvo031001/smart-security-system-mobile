import {Button, Text, View} from "react-native";


export default function Event ({navigation}) {

    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Configuration')
            }
        />
    );
}