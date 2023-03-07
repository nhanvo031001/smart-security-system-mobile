import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    itemBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },

    itemFirst: {width: '50%', backgroundColor: 'blue'},
    itemSecond: {width: '20%', backgroundColor: 'orange'},
    itemThird: {width: '30%', backgroundColor: 'grey'},

    header : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    headerFirst: {width: '50%', },
    headerSecond: {width: '20%', },
    headerThird: {width: '30%', },

    flatListStyle: {
        flexGrow: 0,
        height: '90%',
        marginTop: 10
    }
});