import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import Canvas from 'react-native-canvas';
import { useRef } from 'react';
import { useEffect } from 'react';

const VideoViewLineCrossing = ({ video_url }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const ctx = ref.current.getContext('2d');
            ctx.scale(2, 2);
            ctx.lineCap = "round";
            ctx.strokeStyle = "blue"
            ctx.lineWidth = 2
            // ctx.fillStyle = 'red';
            // ctx.fillRect(50, 50, 10, 50);
            ref.current = ctx;
            ref.current.beginPath();
            ref.current.moveTo(16, 15);
            ref.current.lineTo(565, 312);
            ref.current.stroke();
            ref.current.closePath();

        }
    }, [ref]);

    return (
        <View style={styles.container}>

            <Canvas style={{
                width: '100%', height: '100%',
                // backgroundColor: 'yellow',
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0, zIndex: 10
            }} ref={ref} />


            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: video_url ? video_url : 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="stretch"
                isLooping={true}
                shouldPlay={true}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />


        </View>
    );
};

export default VideoViewLineCrossing;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});