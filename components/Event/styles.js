import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    eventContainer: {
        height: "100%",

    },

    itemBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },

    itemFirst: {width: '50%', backgroundColor: 'red'},
    itemSecond: {width: '10%', backgroundColor: 'yellow'},
    itemThird: {width: '40%', backgroundColor: 'green'},

    header : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    headerFirst: {width: '50%', },
    headerSecond: {width: '10%', },
    headerThird: {width: '40%', },

    flatListStyle: {
        flexGrow: 0,
        height: '75%',
        marginTop: 10
    },

    startDateContainer: {display: 'flex', flexDirection: 'row'},

    startDate: {
        width: 120, height: 50, backgroundColor: 'red', paddingTop: 15,
    },

    startDateInput: {marginLeft: 10, width: 170},

    startDateLib: {marginLeft: 10},

    endDateContainer: {display: 'flex', flexDirection: 'row'},

    endDate: {
        width: 120, height: 50, backgroundColor: 'yellow', paddingTop: 15
    },

    endDateInput: {marginLeft: 10, width: 170},

    endDateLib: {marginLeft: 10},
});