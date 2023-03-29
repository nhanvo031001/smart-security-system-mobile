import { Dimensions, Text, View } from "react-native";
import '../../styles/appStyles';
import { appStyles } from "../../styles/appStyles";
import { styles } from "./styles"
import dataEvents from '../../utils/dummyData/eventList.json';
import { useEffect, useState } from "react";

export default function Report({ navigation }) {

    const [totalEvents, setTotalEvents] = useState('');
    const [processedEvents, setProcessedEvents] = useState('');
    const [trueEvents, setTrueEvents] = useState('');
    const [falseEvents, setFalseEvents] = useState('');


    useEffect(() => {
        let currentEvents = dataEvents;
        let processedNumber = 0, trueAlarmNumber = 0, falseAlarmNumber = 0;
        for (let i = 0; i < currentEvents.length; i++) {
            if (currentEvents[i]["confirm_status"] == "done") {
                processedNumber += 1;
            }

            if (currentEvents[i]["true_alarm"] == true) {
                trueAlarmNumber += 1;
            } else {
                falseAlarmNumber += 1;
            }
        }

        let percentTrueAlarm = parseFloat(trueAlarmNumber / (trueAlarmNumber + falseAlarmNumber) * 100).toFixed(2);
        let percentFalseAlarm = parseFloat(100 - parseFloat(percentTrueAlarm).toFixed(2)).toFixed(2);
        // console.log("number: ", trueAlarmNumber, falseAlarmNumber);
        // console.log("percent: ", percentTrueAlarm, percentFalseAlarm);

        setTotalEvents(currentEvents.length);
        setProcessedEvents(processedNumber)
        setTrueEvents(percentTrueAlarm);
        setFalseEvents(percentFalseAlarm);
    }, [])


    return (
        <View style={[appStyles.appContainer, { marginLeft: 10, marginRight: 10, marginTop: 10, }]}>

            <View style={styles.allEventsAndProcessedEvents}>
                <View style={styles.allEvents}>
                    <Text style={styles.allEventsText}>Tổng số sự kiện</Text>
                    <Text style={styles.allEventsNumber}>{totalEvents}</Text>
                </View>

                <View style={styles.processedEvents}>
                    <Text style={styles.processedEventsText}>Sự kiện đã xử lý</Text>
                    <Text style={styles.processedEventsNumber}> {processedEvents} </Text>
                </View>
            </View>


            <View style={styles.trueAndFalseAlarm}>
                <View style={styles.trueAlarm}>
                    <Text style={styles.trueAlarmText}>Báo động thật</Text>
                    <Text style={styles.trueAlarmNumber}> {trueEvents} </Text>
                </View>

                <View style={styles.falseAlarm}>
                    <Text style={styles.falseAlarmText}>Báo động giả</Text>
                    <Text style={styles.falseAlarmNumber}> {falseEvents} </Text>
                </View>
            </View>


        </View>
    );
}