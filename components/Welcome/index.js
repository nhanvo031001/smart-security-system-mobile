import {Button, Text, View} from "react-native";
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

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function Welcome ({navigation}) {

    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "construct-outline";
                    if (route.name === "Dashboard") {
                        iconName = focused ? "speedometer" : "speedometer";
                    } else if (route.name === "Event") {
                        iconName = focused ? "videocam" : "videocam";
                    } else if (route.name === "Configuration") {
                        iconName = focused ? "construct" : "construct";
                    } else if (route.name === "Report") {
                        iconName = focused ? "bar-chart" : "bar-chart";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person";
                    }
                    return <Ionicons name={iconName} color={color} size={24} />
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#2E90FA',
                tabBarInactiveTintColor: 'grey',
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: "Dashboard" }} />
            <Tab.Screen name="Event" component={Event} options={{ title: "Event" }} />
            <Tab.Screen name="Configuration" component={Configuration} options={{ title: "Configuration" }} />
            <Tab.Screen name="Report" component={Report} options={{ title: "Report" }} />
            <Tab.Screen name="Profile" component={Report} options={{ title: "Profile" }} />
        </Tab.Navigator>

    );
}