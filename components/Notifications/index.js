import {Button, Text, TouchableOpacity, View} from "react-native";
import '../../styles/appStyles'
import {appStyles} from "../../styles/appStyles";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {CommonActions} from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function Notifications({navigation}) {


    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            height: '100%',
            width: '100%'
        }}>
            <Text>notifications</Text>
        </View>

    );
}