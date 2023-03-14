import {Button, Text, View, FlatList, TouchableOpacity, ScrollView, Platform, TouchableHighlight} from "react-native";
import dataEvents from '../../utils/dummyData/eventList.json';
import dataIOTDevicesConfig from '../../utils/dummyData/managementIOTDeviceConfig.json';
import iotDevices from '../../utils/dummyData/managementCameraDevice.json';
import cameraDevices from '../../utils/dummyData/managementIOTDevice.json';
import {useEffect, useState} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from "./styles";
import {TextInput} from "react-native-paper";
import {convertDate} from "../../utils/helper/helper";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Event({navigation}) {
    console.log("Event Page")
    const [originalData, setOriginalData] = useState([]);
    const [eventsList, setEventsList] = useState([]);
    const [configurationIOTsList, setConfigurationIOTsList] = useState([]);
    const [devicesList, setDevicesList] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    // const [showStartDate, setShowStartDate] = useState(false);
    const [showStartDate, setShowStartDate] = useState(Platform.OS == 'ios' ? true : false);
    const [endDate, setEndDate] = useState(new Date());
    // const [showEndDate, setShowEndDate] = useState(false);
    const [showEndDate, setShowEndDate] = useState(Platform.OS == 'ios' ? true : false);
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
    const mapperEvents = (events, mapperForOriginalData) => {
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

        if (mapperForOriginalData == false) {
            setEventsList(events);
        } else {
            setOriginalData(events);
        }
    }
    const onChangeStartDate = (event, selectedDate) => {
        if (event.type == "dismissed") {
            // setShowStartDate(false);
            Platform.OS == 'ios' ? setShowStartDate(true) : setShowStartDate(false);
            return;
        }
        // setShowStartDate(false);
        Platform.OS == 'ios' ? setShowStartDate(true) : setShowStartDate(false);
        setStartDate(selectedDate);

        // set events list
    };
    const onChangeEndDate = (event, selectedDate) => {
        if (event.type == "dismissed") {
            // setShowEndDate(false);
            Platform.OS == 'ios' ? setShowEndDate(true) : setShowEndDate(false);
            return;
        }
        // setShowEndDate(false);
        Platform.OS == 'ios' ? setShowEndDate(true) : setShowEndDate(false);
        setEndDate(selectedDate);

        // set events list
    };
    const onCancelStartDate = () => {
        console.log("cancel start date:");
        // setShowStartDate(false);
        Platform.OS == 'ios' ? setShowStartDate(true) : setShowStartDate(false);
    }
    const onCancelEndDate = () => {
        console.log("cancel end date:");
        // setShowEndDate(false);
        Platform.OS == 'ios' ? setShowEndDate(true) : setShowEndDate(false);
    }
    const handleResetEventsList = () => {
        setStartDate(new Date());
        setEndDate(new Date());
        setEventsList(originalData);
        // mapperEvents(originalData)
    }
    const handleSearchEventsList = () => {
        console.log(convertDate(startDate))
        console.log(convertDate(endDate))
        let startDateObject = Date.parse(convertDate(startDate));
        let endDateObject = Date.parse(convertDate(endDate));

        // set events list
        // let currentEventsList = eventsList;
        let currentEventsList = originalData;
        currentEventsList = currentEventsList.filter((event, index) => {
            let date = event.created_at.substring(0, event.created_at.indexOf(','));
            let dateSplit = date.split('/');
            let dd = Platform.OS == 'ios' ? (dateSplit[0].length == 1 ? '0' + dateSplit[0] : dateSplit[0]) : (dateSplit[1].length == 1 ? '0' + dateSplit[1] : dateSplit[1]);
            let mm = Platform.OS == 'ios' ? (dateSplit[1].length == 1 ? '0' + dateSplit[1] : dateSplit[1]) : (dateSplit[0].length == 1 ? '0' + dateSplit[0] : dateSplit[0]);
            let yyyy = dateSplit[2];
            let eventDate = yyyy + '-' + mm + '-' + dd;
            console.log(event["zone"], eventDate)
            let eventDateObject = Date.parse(eventDate);
            if (startDateObject <= eventDateObject && eventDateObject <= endDateObject) {
                return event;
            }
        })
        // console.log("filtering date event: ", currentEventsList);
        setEventsList(currentEventsList);
    }


    useEffect(() => {
        setOriginalData(dataEvents);
        setConfigurationIOTsList(dataIOTDevicesConfig);
        let dataDevices = iotDevices.concat(cameraDevices);
        setDevicesList(dataDevices);
        mapperEvents(dataEvents, false)
        mapperEvents(dataEvents, true)
    }, []);


    return (
        <View style={styles.eventContainer}>

            <View style={styles.startDateContainer}>
                <Text style={styles.startDate}>Ngày bắt đầu: </Text>
                {/*<TextInput*/}
                {/*    style={{marginLeft: 10, width: 160, backgroundColor: "green"}}*/}
                {/*    disabled={true}*/}
                {/*    right={<TextInput.Icon style={{width: 40}} name='password' onPress={() => {*/}
                {/*        setShowStartDate(true)*/}
                {/*    }}/>}*/}
                {/*    value={startDate.getDate() + "/" + (parseInt(startDate.getMonth()) + 1).toString() + "/" + startDate.getFullYear()}*/}
                {/*/>*/}

                {Platform.OS == 'ios' ?
                    ''
                    :
                    <View style={{display: "flex", flexDirection: 'row',}}>
                        <TextInput
                            style={styles.startDateInput}
                            disabled={true}
                            value={startDate.getDate() + "/" + (parseInt(startDate.getMonth()) + 1).toString() + "/" + startDate.getFullYear()}
                        />

                        <Ionicons
                            onPress={() => {
                                setShowStartDate(true)
                            }}
                            style={{justifyContent: "center", textAlignVertical: "center", marginLeft: -30}}
                            name='calendar-outline' size={20}
                        />
                    </View>
                }

                {showStartDate && <DateTimePicker
                    style={styles.startDateLib}
                    testID="dateTimePicker"
                    value={startDate}
                    mode='date'
                    is24Hour={true}
                    onChange={onChangeStartDate}
                    onTouchCancel={onCancelStartDate}
                />}
            </View>


            <View style={styles.endDateContainer}>
                <Text style={styles.endDate}>Ngày kết thúc: </Text>
                {/*<TextInput*/}
                {/*    style={{marginLeft: 10, width: 170}}*/}
                {/*    disabled={true}*/}
                {/*    right={<TextInput.Icon name='password' onPress={() => {*/}
                {/*        setShowEndDate(true)*/}
                {/*    }}/>}*/}
                {/*    value={endDate.getDate() + "/" + (parseInt(endDate.getMonth()) + 1).toString() + "/" + endDate.getFullYear()}*/}
                {/*/>*/}


                {Platform.OS == 'ios' ?
                    ''
                    :
                    <View style={{display: "flex", flexDirection: 'row',}}>
                        <TextInput
                            style={styles.endDateInput}
                            disabled={true}
                            value={endDate.getDate() + "/" + (parseInt(endDate.getMonth()) + 1).toString() + "/" + endDate.getFullYear()}
                        />

                        <Ionicons
                            onPress={() => {
                                setShowEndDate(true)
                            }}
                            style={{justifyContent: "center", textAlignVertical: "center", marginLeft: -30}}
                            name='calendar-outline' size={20}
                        />
                    </View>

                    // <TextInput
                    //     style={styles.endDateInput}
                    //     disabled={true}
                    //     right={<TextInput.Icon name='password' onPress={() => {
                    //         setShowEndDate(true)
                    //     }}/>}
                    //     value={endDate.getDate() + "/" + (parseInt(endDate.getMonth()) + 1).toString() + "/" + endDate.getFullYear()}
                    // />
                }


                {showEndDate && <DateTimePicker
                    style={styles.endDateLib}
                    testID="dateTimePicker"
                    value={endDate}
                    mode='date'
                    is24Hour={true}
                    onChange={onChangeEndDate}
                    onTouchCancel={onCancelEndDate}
                />}

            </View>

            {/*<View style={styles.searchButtonView}>*/}
            {/*    <Button style={styles.searchButton} color="rgb(33, 150, 243)" title='Tìm kiếm' onPress={handleSearchEventsList}/>*/}
            {/*</View>*/}

            {/*<View style={styles.resetButtonView}>*/}
            {/*    <Button title='Reset' onPress={handleResetEventsList}/>*/}
            {/*</View>*/}


            <View style={styles.containerSearchAndButton}>

                <TouchableHighlight style={styles.resetTouchable}
                                    onPress={handleResetEventsList}
                                    underlayColor="#fff"
                >
                    <Text>Reset</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.searchTouchable}
                                    onPress={handleSearchEventsList}
                                    underlayColor="#fff"
                >
                    <Text>Tìm kiếm</Text>
                </TouchableHighlight>

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