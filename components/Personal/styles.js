import {Dimensions, StyleSheet} from "react-native";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    personalContainer: {
        flex: 1,
        // backgroundColor: "red",
        alignItems: "center",
        // justifyContent: "center",
        height: '100%',
        width: '100%'
    },

    buttonLogout: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: 'red'
    },

    logoutView: {
        width: '40%',
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10
    },

    logoutText: {

    }
});