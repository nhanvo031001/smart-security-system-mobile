import {Button, Dimensions, Image, Switch, Text, TextInput, TouchableOpacity, View} from "react-native";
import '../../styles/appStyles'
import {appStyles} from "../../styles/appStyles";
import logo from '../../assets/hcmut.png';
import {useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {CommonActions } from '@react-navigation/native';

const {screenWidth} = Dimensions.get("window").width;
const {screenHeight} = Dimensions.get("window").height;

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye-off');
    const handleIconPassword = () => {
        if (rightIcon == 'eye-off') {
            setSecureTextEntry(false);
            setRightIcon('eye');
        } else if (rightIcon == 'eye') {
            setSecureTextEntry(true);
            setRightIcon('eye-off')
        }
    }
    const handleLogin = () => {
        navigation.dispatch(state => {
            return CommonActions.reset({
                index: 0,
                routes: [{
                    name: 'Welcome',
                    // state: {
                    //     routes: [{
                    //         name: 'MainTabScreen',
                    //         state: {
                    //             routes: [{
                    //                 name: 'Dashboard',
                    //                 params: {}
                    //             }]
                    //         }
                    //     }]
                    // }

                }]
            })
        })
        // navigation.navigate('Welcome')
    }

    return (
        <View style={appStyles.appContainer}>
            <View style={{
                flex: 1,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 260,
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
                        fontSize: 40
                    }}>Welcome back.</Text>
                </View>

                <View style={{
                    backgroundColor: "yellow",
                    borderRadius: 10,
                    width: "90%",
                    height: 45,
                    marginBottom: 20,
                    // alignItems: "center",
                }}>
                    <TextInput
                        style={{
                            // height: 50,
                            flex: 1,
                            padding: 10,
                            marginLeft: 15,
                        }}
                        placeholder="Tên tài khoản"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setPassword(email)}
                    />


                </View>


                <View style={{
                    backgroundColor: "yellow",
                    borderRadius: 10,
                    width: "90%",
                    height: 45,
                    marginBottom: 20,
                    flexDirection: 'row'
                }}>
                    <TextInput
                        style={{
                            // height: 50,
                            flex: 1,
                            padding: 10,
                            marginLeft: 15,
                        }}
                        placeholder="Mật khẩu"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={secureTextEntry}
                        onChangeText={(password) => setPassword(password)}
                    />

                    <MaterialCommunityIcons style={{
                        paddingTop: 10,
                        paddingRight: 10
                    }} name={rightIcon} size={22} color="#232323"
                                            onPress={handleIconPassword}
                    />
                </View>

                <TouchableOpacity style={{
                    marginBottom: 50,
                    width: '90%',
                    height: 30,
                    alignItems: 'flex-end',
                }}
                                  onPress={() => {navigation.navigate('LoginForgetPassword')}}
                >
                    <Text style={{
                        height: 30,
                        // marginBottom: 50,
                    }}>Quên mật khẩu?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: '90%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    backgroundColor: 'red'
                }}
                    onPress={handleLogin}
                >


                    <View style={{
                        width: '40%',
                        height: 50,
                        backgroundColor: 'blue',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        // marginTop: 100,
                        borderRadius: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>
                            Đăng nhập
                        </Text>
                    </View>

                </TouchableOpacity>


            </View>
        </View>
    );
}