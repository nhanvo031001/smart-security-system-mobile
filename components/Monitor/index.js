import {useEffect, useState} from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import dataEvents from '../../utils/dummyData/eventList.json';
import dataIOTDevicesConfig from '../../utils/dummyData/managementIOTDeviceConfig.json';
import dataCameraDevices from '../../utils/dummyData/managementCameraDevice.json';
import dataIOTDevices from '../../utils/dummyData/managementIOTDevice.json';
import dataBuildings from '../../utils/dummyData/managementBuilding.json';
import dataFloors from '../../utils/dummyData/managementFloor.json';
import data from '../../utils/dummyData/treeData.json';
import {generateDropdownTreeSelectMap} from "../../utils/helper/helper";
import DropdownTreeSelect from "react-dropdown-tree-select";

export default function Monitor({navigation}) {
    const [dataTree, setDataTree] = useState([]);
    const [ pin, setPin ] = useState({
        // latitude: 37.78825,
        // longitude: -122.4324
        latitude: 10.762622,
        longitude: 106.660172
    })
    const [ region, setRegion ] = useState({
        // latitude: 37.78825,
        // longitude: -122.4324,
        latitude: 10.76,
        longitude: 106.66,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })
    const onChange = (currentNode, selectedNodes) => {
        console.log("path::", currentNode.path);
    };
    const assignObjectPaths = (obj, stack) => {
        Object.keys(obj).forEach(k => {
            const node = obj[k];
            if (typeof node === "object") {
                node.path = stack ? `${stack}.${k}` : k;
                assignObjectPaths(node, node.path);
            }
        });
    };


    useEffect(() => {
        // let data = generateDropdownTreeSelectMap(dataBuildings, dataFloors, dataCameraDevices, dataIOTDevices);
        // console.log("data monitor: ", data);
        // assignObjectPaths(treeData);
        // setDataTree(data);
    }, [])

    assignObjectPaths(data)

    return (
        <View style={{ marginTop: 50, flex: 1 }}>

            <DropdownTreeSelect
                data={data}
                onChange={onChange}
                mode="radioSelect"
            />


            {/*<GooglePlacesAutocomplete*/}
            {/*    placeholder="Search"*/}
            {/*    fetchDetails={true}*/}
            {/*    GooglePlacesSearchQuery={{*/}
            {/*        rankby: "distance"*/}
            {/*    }}*/}
            {/*    onPress={(data, details = null) => {*/}
            {/*        // 'details' is provided when fetchDetails = true*/}
            {/*        console.log(data, details)*/}
            {/*        setRegion({*/}
            {/*            latitude: details.geometry.location.lat,*/}
            {/*            longitude: details.geometry.location.lng,*/}
            {/*            latitudeDelta: 0.0922,*/}
            {/*            longitudeDelta: 0.0421*/}
            {/*        })*/}
            {/*    }}*/}
            {/*    query={{*/}
            {/*        key: "KEY",*/}
            {/*        language: "en",*/}
            {/*        components: "country:us",*/}
            {/*        types: "establishment",*/}
            {/*        radius: 30000,*/}
            {/*        location: `${region.latitude}, ${region.longitude}`*/}
            {/*    }}*/}
            {/*    styles={{*/}
            {/*        container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },*/}
            {/*        listView: { backgroundColor: "white" }*/}
            {/*    }}*/}
            {/*/>*/}


            <MapView
                style={styles.map}
                initialRegion={{
                    // latitude: 37.78825,
                    // longitude: -122.4324,
                    latitude: 10.762622,
                    longitude: 106.660172,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                provider="google"
            >
                {/*<Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />*/}
                <Marker
                    coordinate={pin}
                    pinColor="black"
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("Drag start", e.nativeEvent.coordinates)
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                    <Callout>
                        <Text>I'm here</Text>
                    </Callout>
                </Marker>
                {/*<Circle center={pin} radius={1000} />*/}
            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});