import {Text, TouchableOpacity, View} from "react-native";
import '../../styles/appStyles';
import {styles} from "./styles";
import {CommonActions} from "@react-navigation/native";

export default function Personal({navigation}) {

    const handleLogout = () => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{
                name: "Login"
            }]
        }));
    }


    return (
        <View style={styles.personalContainer}>
            <Text>Personal</Text>
            <TouchableOpacity style={styles.buttonLogout}
                              onPress={handleLogout}
            >
                <View style={styles.logoutView}>
                    <Text style={styles.logoutText}>Đăng xuất</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}