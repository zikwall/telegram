import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

const Input = () => {
    const [ message, setMessage ] = useState('What are you doing now?)');

    return (
        <View style={{
            flexDirection: 'row',
            flex: 8,
            borderTopColor: 'rgba( 0, 0, 0, 0.1);',
            borderTopWidth: 1
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15 }}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name={'slightly-smile'} size={25} color={'#b2b5b9'} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 7, width: '100%', paddingHorizontal: 10 }}>
                <TextInput
                    value={message}
                    editable
                    multiline
                    numberOfLines={4}
                    onChangeText={(msg) => setMessage(msg)}
                />
            </View>
            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15 }}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name={'paperclip'} size={25} color={'#b2b5b9'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name={'instagram'} size={25} color={'#b2b5b9'} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Input;
