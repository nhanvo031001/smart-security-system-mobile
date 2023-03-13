import {Platform, Text, View} from "react-native";
import {MenuView} from "@react-native-menu/menu";
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import {useEffect, useState} from "react";
import ConfigurationCameraList from "../ConfigurationCameraList";
import ConfigurationIOTList from "../ConfigurationIOTList";
import ConfigurationUserList from "../ConfigurationUserList";
import dataCameraDevicesConfig from '../../utils/dummyData/managementCameraDeviceConfig.json';
import dataIOTDevicesConfig from '../../utils/dummyData/managementIOTDeviceConfig.json';
import {styles} from "./styles";


export default function Configuration({navigation}) {
    const [visible, setVisible] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState('camera');
    const [selectedMenuText, setSelectedMenuText] = useState('Camera');
    const [cameraConfigList, setCameraConfigList] = useState([]);
    const [iotConfigList, setIotConfigList] = useState([]);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const handleSelectMenu = (type) => {
        switch (type) {
            case "camera":
                console.log("select camera");
                setSelectedMenu('camera');
                setSelectedMenuText('Camera');
                break;

            case "iot":
                console.log("select iot");
                setSelectedMenu('iot');
                setSelectedMenuText('Cảm biến');
                break;


            case "user":
                console.log("select user");
                setSelectedMenuText('Người dùng');
                break;
        }
    }


    useEffect(() => {
        setCameraConfigList(dataCameraDevicesConfig);
        setIotConfigList(dataIOTDevicesConfig);
        setSelectedMenu('camera');
    }, [])


    return (
        <Provider>
            <View style={styles.menuContainer}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Chọn cấu hình: {selectedMenuText}</Button>}>
                    <Menu.Item onPress={() => handleSelectMenu('camera')} title="Camera"/>
                    <Menu.Item onPress={() => handleSelectMenu('iot')} title="Thiết bị cảm biến"/>
                    {/*<Menu.Item onPress={() => handleSelectMenu('user')} title="Người dùng"/>*/}
                </Menu>
            </View>


            {selectedMenu == 'camera' ? <ConfigurationCameraList navigation={navigation} camerasList={cameraConfigList}/> : ''}
            {selectedMenu == 'iot' ? <ConfigurationIOTList navigation={navigation} iotList={iotConfigList}/> : ''}
            {selectedMenu == 'user' ? <ConfigurationUserList/> : ''}

        </Provider>
    );
}