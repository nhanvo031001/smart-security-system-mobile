import {Dimensions, Text, View} from "react-native";
import '../../styles/appStyles';
import {appStyles} from "../../styles/appStyles";


const screenWidth = Dimensions.get("window").width;

export default function Report({navigation}) {

    return (
        <View style={appStyles.appContainer}>
            <Text>report</Text>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    width: screenWidth / 2 - 20,
                    height: 100,
                    backgroundColor: 'red',
                    borderRadius: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                    }}>Tổng số sự kiện</Text>
                    <Text style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginTop: 10,
                        fontSize: 30
                    }}>1010121</Text>
                </View>

                <View style={{
                    width: screenWidth / 2 - 20,
                    height: 100,
                    backgroundColor: 'blue',
                    borderRadius: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                    }}>Sự kiện đã xử lý</Text>
                    <Text style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginTop: 10,
                        fontSize: 30,
                    }}>1010121</Text>
                </View>
            </View>



            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <View style={{
                    width: screenWidth / 2 - 20,
                    height: 100,
                    backgroundColor: 'yellow',
                    borderRadius: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                    }}>Báo động thật</Text>
                    <Text style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginTop: 10,
                        fontSize: 30
                    }}>80%</Text>
                </View>

                <View style={{
                    width: screenWidth / 2 - 20,
                    height: 100,
                    backgroundColor: 'grey',
                    borderRadius: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                    }}>Báo động giả</Text>
                    <Text style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginTop: 10,
                        fontSize: 30,
                    }}>20%</Text>
                </View>
            </View>


        </View>
    );
}