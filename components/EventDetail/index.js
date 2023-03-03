import {Text, View} from "react-native";
import {styles} from "./styles";


export default function EventDetail ({navigation, route}) {
    const eventDetailInfo = route.params;
    console.log("event detail: ", eventDetailInfo);
    return (
        <View>
            <View style={styles.eventDetailBlock}>
                <Text style={styles.eventDetailLeft}>Mã số</Text>
                <Text style={styles.eventDetailRight}>{eventDetailInfo.id}</Text>
            </View>

            <View style={styles.eventDetailBlock}>
                <Text style={styles.eventDetailLeft}>Địa chỉ</Text>
                <Text style={styles.eventDetailRight}>{eventDetailInfo.address}</Text>
            </View>
        </View>
    );
}