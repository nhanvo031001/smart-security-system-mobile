import {Dimensions, StyleSheet} from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    allEventsAndProcessedEvents: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    allEvents: {
        width: screenWidth / 2 - 20,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 10
    },

    allEventsText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    },

    allEventsNumber: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 30
    },

    processedEvents: {
        width: screenWidth / 2 - 20,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 10
    },

    processedEventsText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    },

    processedEventsNumber:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 30,
    },

    trueAndFalseAlarm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    trueAlarm: {
        width: screenWidth / 2 - 20,
        height: 100,
        backgroundColor: 'yellow',
        borderRadius: 10
    },

    trueAlarmText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    },

    trueAlarmNumber: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 30
    },

    falseAlarm: {
        width: screenWidth / 2 - 20,
        height: 100,
        backgroundColor: 'grey',
        borderRadius: 10
    },

    falseAlarmText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    },

    falseAlarmNumber:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 30,
    },

    
});