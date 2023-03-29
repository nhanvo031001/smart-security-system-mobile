import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { appStyles } from "../../styles/appStyles";
import { PieChart, ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import dataEvents from '../../utils/dummyData/eventList.json';
import dataIOTDevicesConfig from '../../utils/dummyData/managementIOTDeviceConfig.json';
import iotDevices from '../../utils/dummyData/managementCameraDevice.json';
import cameraDevices from '../../utils/dummyData/managementIOTDevice.json';
import dataBuildings from '../../utils/dummyData/managementBuilding.json';
import dataEventsType from '../../utils/dummyData/configurationEventType.json';
import ImageModal from 'react-native-image-modal';
import { styles } from "./styles";

const screenWidth = Dimensions.get("window").width;

export default function Dashboard({ navigation }) {

    const [iotDevicesMap, setIotDevicesMap] = useState([]);           // map
    const [cameraDevicesMap, setCameraDevicesMap] = useState([]);     // map
    const [buildingsList, setBuildingsList] = useState([]);
    const [recentEvents, setRecentEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const [dataPieChart, setDataPieChart] = useState([]);
    const mapperRecentEvents = (events) => {
        let devicesList = iotDevices.concat(cameraDevices);
        let latestEvents = [];
        for (let i = 0; i < 3; i++) {
            let zone = events[i]['zone'];
            let event_name = '', device_name = '', address = '', id_iot_config = '';
            for (let i = 0; i < dataIOTDevicesConfig.length; i++) {
                if (zone == dataIOTDevicesConfig[i]['zone']) {
                    // event_name = dataIOTDevicesConfig[i].event_name;
                    // device_name = dataIOTDevicesConfig[i].name;
                    // id_iot_config = dataIOTDevicesConfig[i].id;
                    // break;

                    let connect_event_type = dataIOTDevicesConfig[i]['connect_event_type'];
                    for (let j = 0; j < dataEventsType.length; j++) {
                        if (dataEventsType[j].id == connect_event_type) {
                            event_name = dataEventsType[j].event_name;
                            break;
                        }
                    }
                    device_name = dataIOTDevicesConfig[i].name;
                    id_iot_config = dataIOTDevicesConfig[i].id;
                    break;
                }
            }

            for (let i = 0; i < devicesList.length; i++) {
                if (devicesList[i].type == 'iot' && devicesList[i].connect_iot == id_iot_config) {
                    address = devicesList[i].address;
                    break;
                }
            }

            let created_at = new Date(events[i].created_at).toLocaleString();
            latestEvents.push({
                ...events[i],
                event_name,
                device_name,
                address,
                created_at,
                zone: zone,
                key: zone,
                video_url: 'https://caodang.fpt.edu.vn/wp-content/uploads/react-native.jpg'
            })
        }

        // console.log("mapper event dashboard: ", latestEvents)
        setRecentEvents(latestEvents);
    }
    const handleDataForPieChart = (numCameras, numIots) => {
        const data = [
            {
                name: "Camera",
                population: numCameras,
                color: "#0BA5EC",
                legendFontColor: "#0BA5EC",
                legendFontSize: 15
            },
            {
                name: "Cảm biến",
                population: numIots,
                color: "#F63D68",
                legendFontColor: "#F63D68",
                legendFontSize: 15
            },
        ];
        setDataPieChart(data);
    }


    useEffect(() => {
        /* call api to get dataBuildings, dataEvents, iotDevicesMap, cameraDevicesMap */

        let currentBuildings = dataBuildings;
        let currentIotMap = iotDevices;
        let currentCameraMap = cameraDevices;
        let currentEvents = dataEvents;

        setBuildingsList(currentBuildings);
        setIotDevicesMap(currentIotMap);
        setCameraDevicesMap(currentCameraMap);
        setEvents(currentEvents);
        mapperRecentEvents(dataEvents);
        handleDataForPieChart(currentCameraMap.length, currentIotMap.length);
    }, [])


    return (
        <ScrollView style={appStyles.appContainer}>
            <View style={styles.threeNumberBlock}>
                <View style={styles.eachBlock}>
                    <Text style={styles.numberOfEachBlock}> {buildingsList && buildingsList.length} </Text>
                    <Text style={styles.textOfEachBlock}> tòa nhà </Text>
                </View>

                <View style={styles.eachBlock}>
                    <Text style={styles.numberOfEachBlock}> {parseInt(iotDevicesMap.length) + parseInt(cameraDevicesMap.length)} </Text>
                    <Text style={styles.textOfEachBlock}> thiết bị </Text>
                </View>

                <View style={styles.eachBlockEvent}>
                    <Text style={styles.numberOfEachBlock}> {events.length} </Text>
                    <Text style={styles.textOfEachBlock}> sự kiện </Text>
                </View>
            </View>


            <View style={styles.pieChartContainer}>
                <PieChart
                    data={dataPieChart}
                    width={screenWidth}
                    height={220}
                    chartConfig={styles.chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[10, 10]}
                    absolute
                />

            </View>


            <View style={styles.recentEventsContainer}>
                <Text style={styles.recentEventText}>Sự kiện gần đây</Text>

                {recentEvents && recentEvents.map((event, index) => {
                    let url = event.video_url;
                    return <View key={index}>
                        <View style={styles.recentEventBlock}>
                            <View>
                                <ImageModal
                                    resizeMode="contain"
                                    imageBackgroundColor="#000000"
                                    style={{ width: 150, height: 150, }}
                                    source={{ uri: url, }}
                                />
                            </View>
                            <View style={styles.recentEventInfoRight}>
                                <Text style={styles.eventName}>{event.event_name}</Text>
                                <Text style={styles.eventZone}>Zone: {event['zone']}</Text>
                                <Text style={styles.eventTime}>{event.created_at}</Text>
                                <Text style={styles.eventAddress}>Vị trí: {event.address}</Text>
                                <Text style={styles.eventDevice}>Phát hiện bởi: {event.device_name}</Text>
                            </View>
                        </View>

                    </View>

                })}

            </View>


        </ScrollView>
    );
}

// const data = [
//     {
//         name: "Camera",
//         population: 4,
//         color: "#0BA5EC",
//         // legendFontColor: "#7F7F7F",
//         legendFontColor: "#0BA5EC",
//         legendFontSize: 15
//     },
//     {
//         name: "Cảm biến",
//         population: 3,
//         color: "#F63D68",
//         // legendFontColor: "#7F7F7F",
//         legendFontColor: "#F63D68",
//         legendFontSize: 15
//     },
// ];