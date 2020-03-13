import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { human } from "react-native-typography";
import Icon from "react-native-vector-icons/Fontisto";

import UIAvatar from "../ui/UIAvatar";

const { width } = Dimensions.get('window');

const Item = ({ user, message, time, muted, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                paddingVertical: 10
            }}>
                <UIAvatar src={user.avatar} size={60} />

                <View style={{
                    width: width * 0.75,
                    paddingLeft: 15,
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={human.callout}>
                                { user.name }
                            </Text>

                            {
                                muted &&
                                <View style={{ paddingLeft: 5 }}>
                                    <Icon name={'volume-off'} size={10} color={'#767676'} />
                                </View>
                            }
                        </View>
                        <Text style={[ human.footnote, { color: '#767676' } ]}>
                            { time }
                        </Text>
                    </View>
                    <Text numberOfLines={2} style={[ human.footnote, { flexWrap: 'wrap', color: '#767676' } ]}>
                        { message }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default Item;
