// import { View, Text } from "react-native";

// export default function VideoView({ navigation }) {

//     return (

//         <View>
//             <Text>video view</Text>
//         </View>
//     );
// }




import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoView = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={{}}>
            <Video
                ref={video}
                // style={styles.video}
                style={{
                    width: '100%',
                    height: 200,
                }}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping={true}
                shouldPlay={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            {/* <View style={styles.buttons}> */}
            <View >
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    );
};

export default VideoView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});