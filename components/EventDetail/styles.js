import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    eventDetailBlock: {
        display: 'flex',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },

    eventDetailLeft: {
        width: '30%',
        // backgroundColor: '#D0D5DD',
        marginLeft: 10,
        fontWeight: "bold",
    },

    eventDetailRight: {
        width: '70%',
        // backgroundColor: 'yellow'
    },

    editResponseButton: {
        width: '100%',
        marginBottom: -20,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginTop: 10,
        paddingRight: 10,

    },

    trueAlarmArea: {
        flexDirection: 'row', alignItems: 'center'
    },

    trueAlarmText: {
        width: 40
    },

    commentInputArea: {
        marginLeft: 7,
        // backgroundColor: 'yellow'
        backgroundColor: "white",
        marginBottom: 30,
    },

    commentConfirmCancelButton: {
        display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 30
    },

    commentConfirm: {
        width: 100,
        backgroundColor: "#87cefa",
        marginRight: 10
    },

    commentCancel: {
        width: 60
    }
});