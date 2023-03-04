import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    itemBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
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
        height: '90%',
        marginTop: 10
    }
});