import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    threeNumberBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'yellow'
    },

    eachBlock: {
        width: 130,
        height: 100,
        backgroundColor: 'red',
    },

    eachBlockEvent: {
        width: 130,
        height: 100,
        backgroundColor: 'green',
        flexShrink: 1
    },


    numberOfEachBlock: {
        fontSize: 34,
        fontWeight: 'bold',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        textAlign: 'center'
    },

    textOfEachBlock: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
        textAlign: 'center'
    },

    pieChartContainer: {
        backgroundColor: 'blue',
        marginTop: 10,
    },

    recentEventsContainer: {
        backgroundColor: 'purple',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column'
    },

    recentEventBlock: {
        backgroundColor: 'grey',
        margin: 10,
        display: 'flex',
        flexDirection: 'row'
    },

    recentEventInfoRight: {
        backgroundColor: 'red',
        width: '60%'
    },

    chartConfig: {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 21,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    }
});