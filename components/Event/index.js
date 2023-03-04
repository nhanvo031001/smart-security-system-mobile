import {Button, Text, View, FlatList, TouchableOpacity, ScrollView} from "react-native";
import dataEvents from '../../utils/dummyData/eventList.json';
import dataIOTDevicesConfig from '../../utils/dummyData/managementIOTDeviceConfig.json';
import iotDevices from '../../utils/dummyData/managementCameraDevice.json';
import cameraDevices from '../../utils/dummyData/managementIOTDevice.json';
import {useEffect, useState} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from "./styles";

export default function Event({navigation}) {
    console.log("Event Page")
    const [originalData, setOriginalData] = useState([]);
    const [eventsList, setEventsList] = useState([]);
    const [configurationIOTsList, setConfigurationIOTsList] = useState([]);
    const [devicesList, setDevicesList] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const FlatListItem = (item, index) => {
        return <TouchableOpacity onPress={() => navigation.navigate('EventDetail', item)}>
            <View style={styles.itemBlock}>
                <Text style={styles.itemFirst}>{item.event_name}</Text>
                <Text style={styles.itemSecond}>{item['zone']}</Text>
                <Text style={styles.itemThird}>{item.created_at}</Text>
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
    const onChangeStartDate = (event, selectedDate) => {
        setStartDate(selectedDate);

        // set events list
    };
    const onChangeEndDate = (event, selectedDate) => {
        setEndDate(selectedDate);

        // set events list
    };
    const handleResetEventsList = () => {

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

            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{width: 120, height: 50, backgroundColor: 'red', paddingTop: 15}}>Ngày bắt đầu: </Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={startDate}
                    mode='date'
                    is24Hour={true}
                    onChange={onChangeStartDate}
                />
            </View>

            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{width: 120, height: 50, backgroundColor: 'yellow', paddingTop: 15}}>Ngày kết thúc: </Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={endDate}
                    mode='date'
                    is24Hour={true}
                    onChange={onChangeEndDate}
                />
            </View>

            <View>
                <Button title='Reset' onPress={handleResetEventsList}/>
            </View>


            <FlatList
                style={styles.flatListStyle}
                data={eventsList}
                renderItem={({item, index}) => {
                    return (FlatListItem(item, index));
                }}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={FlatListHeader}
            >
            </FlatList>


        </View>
    );
}