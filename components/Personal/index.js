import {Button, Text, TouchableOpacity, View} from "react-native";
import '../../styles/appStyles'
import {appStyles} from "../../styles/appStyles";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTabScreen from "../MainTabScreen";
import Dashboard from "../Dashboard";
import Event from "../Event"
import Ionicons from "react-native-vector-icons/Ionicons";
import Configuration from "../Configuration";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Report from "../Report";
import {CommonActions} from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function Personal({navigation}) {

    const handleLogout = () => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{
                name: "Login"
            }]
        }));
    }


    return (
        <View style={{
            flex: 1,
            // backgroundColor: "red",
            alignItems: "center",
            // justifyContent: "center",
            height: '100%',
            width: '100%'
        }}>
            <Text>Personal</Text>
            <TouchableOpacity style={{
                width: '90%',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                backgroundColor: 'red'
            }}
                onPress={handleLogout}
            >
                <View style={{
                    width: '40%',
                    height: 50,
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: 10
                }}>
                    <Text>Đăng xuất</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}