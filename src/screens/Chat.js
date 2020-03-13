import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';

import { UIView, UIChatInput, MessageItem } from '../components';
import { Fake } from '../utils';


export default function Chat() {
    return (
        <View style={{ flex: 30 }}>
            <UIView style={{ flex: 29 }}>
                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        //getItemCount={}
                        data={Fake.MESSAGES}
                        //getItem={}
                        renderItem={({item}) => (
                            <MessageItem item={item} user={item.user} />
                        )}
                        keyExtractor={(item, index) => `__${index}`}
                        initialScrollIndex={Fake.MESSAGES.length - 1}
                    />
                </View>
            </UIView>

            <UIView style={{ justifyContent: 'flex-end', flex: 2 }}>
                <UIChatInput />
            </UIView>
        </View>
    )
}
