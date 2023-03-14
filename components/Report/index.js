import {Dimensions, Text, View} from "react-native";
import '../../styles/appStyles';
import {appStyles} from "../../styles/appStyles";
import {styles} from "./styles"


export default function Report({navigation}) {

    return (
        <View style={[appStyles.appContainer, {marginLeft: 10, marginRight: 10, marginTop: 10,}]}>

            <View style={styles.allEventsAndProcessedEvents}>
                <View style={styles.allEvents}>
                    <Text style={styles.allEventsText}>Tổng số sự kiện</Text>
                    <Text style={styles.allEventsNumber}>1010121</Text>
                </View>

                <View style={styles.processedEvents}>
                    <Text style={styles.processedEventsText}>Sự kiện đã xử lý</Text>
                    <Text style={styles.processedEventsNumber}>1010121</Text>
                </View>
            </View>


            <View style={styles.trueAndFalseAlarm}>
                <View style={styles.trueAlarm}>
                    <Text style={styles.trueAlarmText}>Báo động thật</Text>
                    <Text style={styles.trueAlarmNumber}>80%</Text>
                </View>

                <View style={styles.falseAlarm}>
                    <Text style={styles.falseAlarmText}>Báo động giả</Text>
                    <Text style={styles.falseAlarmNumber}>20%</Text>
                </View>
            </View>


        </View>
    );
}