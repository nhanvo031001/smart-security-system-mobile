import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    eventDetailBlock: {
        display: 'flex',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        flexDirection: 'row'
    },

    eventDetailLeft: {
        width: '30%', backgroundColor: 'red',
        marginLeft: 10
    },

    eventDetailRight: {
        width: '70%', backgroundColor: 'yellow'
    },
});