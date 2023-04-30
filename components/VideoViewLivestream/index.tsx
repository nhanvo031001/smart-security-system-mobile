import React from 'react';
import { Text } from "react-native";
import { View } from "react-native";
import {Client} from "../../package/ion"
import {IonSFUJSONRPCSignal}  from "../../package/ion/signal/json-rpc-impl"
import {v4 as uuidv4} from 'uuid';
export interface Props {
    roomName: string;
}
const SFUAddress: string = process.env.SFU_ADDRESS ?? "";
const VideoViewLivestream:React.FC<Props> = (props) => {
    let streams = {};
    let signal = new IonSFUJSONRPCSignal(SFUAddress);
    const client = new Client(signal)
    signal.onopen = () => client.join(props.roomName, uuidv4());
    return (
        <View>
            <Text>URL: {SFUAddress} </Text>
        </View>
    );
}

export default VideoViewLivestream;