import { Button, Text, View } from "react-native";
import '../../styles/appStyles'
import { appStyles } from "../../styles/appStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabScreen from "../MainTabScreen";
import Dashboard from "../Dashboard";
import Event from "../Event"
import Ionicons from "react-native-vector-icons/Ionicons";
import Configuration from "../Configuration";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Report from "../Report";
import Personal from "../Personal";
import Notifications from "../Notifications";
import VideoView from "../VideoView";
import MonitorVideo from "../MonitorVideo";
import { useEffect, useState } from "react";
import { EventAPI } from "../../apis/EventAPI";
import { useDispatch, useSelector } from "react-redux";
import { getEventsList } from "../../reducers/eventReducer";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function Welcome({ navigation }) {

    const dispatch = useDispatch();
    const eventsListRedux = useSelector(state => state.event.eventsList);
    const [eventsList, setEventsList] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [firstFetch, setFirstFetch] = useState([]);


    useEffect(() => {
        // if (firstFetch) {
        //     EventAPI.getAll().then(res => {
        //         console.log("eventst list WELCOME: ", res.data.events);
        //         setEventsList(res.data.events);
        //         setOriginalData(res.data.events);
        //     }).catch(err => {
        //         console.log("error: ", err);
        //     })

        //     setFirstFetch(false);
        // }

        EventAPI.getAll().then(res => {
            console.log("eventst list WELCOME: ", res.data.events);
            dispatch(getEventsList(res.data.events))
            setEventsList(res.data.events);
            setOriginalData(res.data.events);
        }).catch(err => {
            console.log("error: ", err);
        })
    }, [])

    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "construct-outline";
                    if (route.name === "Dashboard") {
                        iconName = focused ? "speedometer" : "speedometer";
                    } else if (route.name === "Event") {
                        // iconName = focused ? "videocam" : "videocam";
                        iconName = focused ? "radio" : "radio";
                    } else if (route.name === "Configuration") {
                        iconName = focused ? "construct" : "construct";
                    } else if (route.name === "Report") {
                        iconName = focused ? "bar-chart" : "bar-chart";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person";
                    } else if (route.name === "Personal") {
                        iconName = focused ? "person-outline" : "person-outline";
                    } else if (route.name === "Notifications") {
                        iconName = focused ? "notifications" : "notifications";
                    } else if (route.name === "MonitorVideo") {
                        iconName = focused ? "videocam-outline" : "videocam-outline";
                    }
                    return <Ionicons name={iconName} color={color} size={24} />
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#2E90FA',
                tabBarInactiveTintColor: 'grey',
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: "Dashboard" }} initialParams={{ eventsList: eventsList }} />
            <Tab.Screen name="MonitorVideo" component={MonitorVideo} options={{ title: "MonitorVideo" }} />
            <Tab.Screen name="Event" component={Event} options={{ title: "Event" }} />
            {/* <Tab.Screen name="Configuration" component={Configuration} options={{ title: "Configuration" }} /> */}
            <Tab.Screen name="Report" component={Report} options={{ title: "Report" }} />
            {/*<Tab.Screen name="Profile" component={Report} options={{ title: "Profile" }} />*/}
            <Tab.Screen name="Notifications" component={Notifications} options={{ title: "Notifications" }} />
            <Tab.Screen name="Personal" component={Personal} options={{ title: "Personal" }} />
            {/* <Tab.Screen name="VideoView" component={VideoView} options={{ title: "VideoView" }} /> */}
        </Tab.Navigator>

    );
}