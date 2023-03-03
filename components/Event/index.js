import {Button, Text, View, FlatList, TouchableOpacity} from "react-native";
import dataEvents from '../../utils/dummyData/eventList.json';
import dataIOTDevicesConfig from '../../utils/dummyData/managementIOTDeviceConfig.json';
import iotDevices from '../../utils/dummyData/managementCameraDevice.json';
import cameraDevices from '../../utils/dummyData/managementIOTDevice.json';
import {useEffect, useState} from "react";
import {styles} from "./styles";

export default function Event({navigation}) {
    console.log("Event Page")
    const [originalData, setOriginalData] = useState([]);
    const [eventsList, setEventsList] = useState([]);
    const [configurationIOTsList, setConfigurationIOTsList] = useState([]);
    const [devicesList, setDevicesList] = useState([]);
    const FlatListItem = (item, index) => {
        let eventName = item['zone'];
        let created_at = new Date(item['created_at']).toLocaleString();

        return <TouchableOpacity onPress={() => navigation.navigate('EventDetail', item)}>
            <View style={styles.itemBlock}>
                <Text style={styles.itemFirst}>Cảm biến chuyển động mở cửa</Text>
                <Text style={styles.itemSecond}>{eventName}</Text>
                <Text style={styles.itemThird}>{created_at}</Text>
            </View>
        </TouchableOpacity>
    }
    const FlatListHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerFirst}>Sự kiện</Text>
                <Text style={styles.headerSecond}>Zone</Text>
                <Text style={styles.headerThird}>Thời điểm</Text>
            </View>
        )
    }
    const mapperEvents = (events) => {
        events = events.map((ele, key) => {
            let zone = ele['zone'];

            let event_name = '', device_name = '', address = '', id_iot_config = '';
            for (let i = 0; i < dataIOTDevicesConfig.length; i++) {
                if (zone == dataIOTDevicesConfig[i]['zone']) {
                    event_name = dataIOTDevicesConfig[i].event_name;
                    device_name = dataIOTDevicesConfig[i].name;
                    id_iot_config = dataIOTDevicesConfig[i].id;
                    break;
                }
            }

            let dataDevices = iotDevices.concat(cameraDevices);
            for (let i = 0; i < dataDevices.length; i++) {
                if (dataDevices[i].type == 'iot' && dataDevices[i].connect_iot == id_iot_config) {
                    address = dataDevices[i].address;
                    break;
                }
            }

            let created_at = new Date(ele.created_at).toLocaleString();
            return {...ele, event_name, device_name, address, created_at, zone: zone, key: zone}
        })


        setEventsList(events);
    }


    useEffect(() => {
        setOriginalData(dataEvents);
        setConfigurationIOTsList(dataIOTDevicesConfig);
        let dataDevices = iotDevices.concat(cameraDevices);
        setDevicesList(dataDevices);
        mapperEvents(dataEvents)
    }, []);


    return (
        <View>
            <FlatList
                data={eventsList}
                renderItem={({item, index}) => {
                    return (FlatListItem(item, index));
                }}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={FlatListHeader}
            >
            </FlatList>

            <Button
                title="Go to Configuration"
                onPress={() =>
                    navigation.navigate('Configuration')
                }
            />
        </View>
    );
}