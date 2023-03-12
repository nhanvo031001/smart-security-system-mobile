import {Button, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import '../../styles/appStyles'
import {appStyles} from "../../styles/appStyles";
import logo from "../../assets/hcmut.png";

export default function LoginForgetPassword({navigation}) {

    return (
        <View style={appStyles.appContainer}>
            <View style={{
                flex: 1,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 230,
                height: '100%',
                width: '100%'
            }}>
                <Image source={logo} style={{
                    width: 150,
                    height: 150,
                    marginBottom: 20
                }}/>

                <View style={{
                    width: '80%',
                    height: 90,
                    // backgroundColor: 'red',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 30
                    }}>Khôi phục mật khẩu</Text>
                </View>

                <View style={{
                    backgroundColor: "yellow",
                    borderRadius: 10,
                    width: "90%",
                    height: 45,
                    marginBottom: 10,
                    // alignItems: "center",
                }}>
                    <TextInput
                        style={{
                            // height: 50,
                            flex: 1,
                            padding: 10,
                            marginLeft: 15,
                        }}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                    />
                </View>


                <View style={{
                    // marginBottom: 10,
                    width: '90%',
                    height: 30,
                    alignItems: 'flex-start',
                }}
                >
                    <Text style={{
                        height: 50,
                        // marginBottom: 50,
                        fontSize: 13,
                        width: '100%',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>
                            Hướng dẫn:
                        </Text>
                        <Text> </Text>
                        <Text>
                            Bạn sẽ nhận được email có liên kết đặt lại mật khẩu.
                        </Text>
                    </Text>
                </View>


                <TouchableOpacity style={{
                    width: '90%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                    <View style={{
                        width: 150,
                        height: 50,
                        backgroundColor: 'blue',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 100,
                        borderRadius: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>
                            Gửi liên kết
                        </Text>
                    </View>

                </TouchableOpacity>


            </View>


        </View>
    );
}