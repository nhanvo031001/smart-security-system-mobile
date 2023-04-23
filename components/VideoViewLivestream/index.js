import React, { useEffect, useRef } from "react";
import { Client, LocalStream } from "ion-sdk-js";
import { IonSFUJSONRPCSignal } from "ion-sdk-js/lib/signal/json-rpc-impl";
import { v4 as uuidv4 } from "uuid";
import { View } from "react-native";
import { Video } from "expo-av";

const SFUAddress = process.env.REACT_APP_SFU_ADDRESS;

export default function VideoViewLivestream(props) {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const subVideo = useRef();
    const pubVideo = useRef();
    const config = {
        iceServers: [
            {
                urls: "stun:stun.l.google.com:19302",
            },
            {
                urls: "stun:stun.stunprotocol.org:3478",
            },
        ],
    };

    let client, signal = null;
    let streams = {};
    signal = new IonSFUJSONRPCSignal(SFUAddress);

    client = new Client(signal, config);
    signal.onopen = () => client.join(props.roomName, uuidv4());

    var doOnce = false;
    useEffect(() => {
        if (!doOnce) {
            client.ontrack = (track, stream) => {
                console.log("got track:", track.id, "kind:", track.kind, "for stream:", stream.id);
                if (!streams[stream.id]) {
                    subVideo.current.srcObject = stream;
                    subVideo.current.autoplay = true;
                    stream.onremovetrack = () => {
                        subVideo.current.srcObject = null;
                    };
                }
                track.onunmute = () => {
                    if (track.kind === "audio") {
                        subVideo.current.muted = false;
                    } else {
                        subVideo.current.srcObject = stream;
                        subVideo.current.autoplay = true;
                    }
                };
            };
            // start(true);
            doOnce = true;
        }
    }, []);

    return (
        <View>

            <View >
                {/* <video
          id="pubVideo"
          className="bg-black"
          ref={pubVideo}
          style={
            {
              width: 500,
              position: "relative",
              overflow: "hidden",
            }
          }
        /> */}
            </View>


            <View >
                <Video
                    ref={subVideo}
                    style={styles.video}
                    source={{
                        // uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        uri: video_url ? video_url : 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping={true}
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                // id="subVideo"
                // className="bg-black"
                // ref={subVideo}
                // autoPlay
                // playsInline
                // muted={true}
                // style={
                //     {
                //         width: 500,
                //         position: "relative",
                //         overflow: "hidden",
                //     }
                // }
                />
            </View>
        </View>
    );
}
