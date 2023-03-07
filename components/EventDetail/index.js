import {Button, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View} from "react-native";
import {styles} from "./styles";
import {RadioButton} from 'react-native-paper';
import {useEffect, useState} from "react";

export default function EventDetail({navigation, route}) {
    console.log("route params: ", route.params)
    const [eventDetailInfoOriginal, setEventDetailInfoOriginal] = useState({});
    const [eventDetailInfo, setEventDetailInfo] = useState({});
    const [trueAlarmRadio, setTrueAlarmRadio] = useState();
    const [disabledResponse, setDisabledResponse] = useState(true);
    const [eventComment, setEventComment] = useState('');
    const handleConfirmEditResponse = (e) => {
        setDisabledResponse(!disabledResponse);
    }
    const handleCancelEditResponse = (e) => {
        setDisabledResponse(!disabledResponse);
        setEventDetailInfo({...eventDetailInfoOriginal});
    }
    const handleChangeResponseComment = (e) => {
        console.log("change comment: ", e);
    }


    useEffect(() => {
        setEventDetailInfo(route.params);
        setEventDetailInfoOriginal(route.params);
        setTrueAlarmRadio(route.params.true_alarm ? 'true' : 'false');
        setEventComment(route.params.comment);
    }, [route.params, eventDetailInfo])


    return (
        <ScrollView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Mã số:</Text>
                    <Text style={styles.eventDetailRight}>{eventDetailInfo.id}</Text>
                </View>

                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Sự kiện:</Text>
                    <Text style={styles.eventDetailRight}>{eventDetailInfo.event_name}</Text>
                </View>

                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Zone:</Text>
                    <Text style={styles.eventDetailRight}>{eventDetailInfo['zone']}</Text>
                </View>

                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Vị trí:</Text>
                    <Text style={styles.eventDetailRight}>{eventDetailInfo['address']}</Text>
                </View>

                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Thời điểm:</Text>
                    <Text style={styles.eventDetailRight}>{eventDetailInfo.created_at}</Text>
                </View>

                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Thiết bị:</Text>
                    <Text style={styles.eventDetailRight}>{eventDetailInfo.device_name}</Text>
                </View>

                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Hình ảnh:</Text>
                    <Text style={styles.eventDetailRight}></Text>
                </View>
                <Image style={{width: 200, height: 200, marginLeft: 7}}
                       source={{uri: 'https://caodang.fpt.edu.vn/wp-content/uploads/react-native.jpg'}}/>

                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Video:</Text>
                    <Text style={styles.eventDetailRight}>Chưa có video</Text>
                </View>


                <View style={styles.editResponseButton}>
                    <Button title='Sửa' onPress={() => setDisabledResponse(false)}></Button>
                </View>
                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Báo động thật:</Text>
                    <View style={styles.eventDetailRight}>
                        <RadioButton.Group
                            onValueChange={value => setTrueAlarmRadio(value)}
                            value={trueAlarmRadio}
                        >
                            <View style={styles.trueAlarmArea}>
                                <Text style={styles.trueAlarmText}>True</Text>
                                <RadioButton disabled={disabledResponse} value="true"/>
                            </View>
                            <View style={styles.trueAlarmArea}>
                                <Text style={styles.trueAlarmText}>False</Text>
                                <RadioButton disabled={disabledResponse} value="false"/>
                            </View>
                        </RadioButton.Group>
                    </View>
                </View>

                <View style={styles.eventDetailBlock}>
                    <Text style={styles.eventDetailLeft}>Phản hồi:</Text>
                    <Text style={styles.eventDetailRight}></Text>
                </View>
                <TextInput
                    editable={!disabledResponse}
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={text => setEventComment(text)}
                    value={eventComment}
                    style={styles.commentInputArea}
                />

                {disabledResponse == true ?
                    ''
                    :
                    <View style={styles.commentConfirmCancelButton}>
                        <View style={styles.commentConfirm}>
                            <Button onPress={handleConfirmEditResponse} title='Xác nhận'/>
                        </View>
                        <View style={styles.commentCancel}>
                            <Button onPress={handleCancelEditResponse} color='red' title='Hủy'/>
                        </View>
                    </View>
                }

            </KeyboardAvoidingView>
        </ScrollView>
    );
}