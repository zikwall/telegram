import React from 'react';
import {
    View,
    FlatList,
    Text,
    TextInput
} from 'react-native';
import LottieView from 'lottie-react-native';
import { human } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Fontisto';

import { UIView } from '../components';
import { Fake } from '../utils';
import Stickers from '../stickers/Stickers';

const StickerMessage = ({ isOwn, sticker }) => {
    const style = isOwn ? {paddingRight: 10} :  {paddingLeft: 10};
    const timeBadgeStyle = isOwn ? { right: 0 } : {left: 0};

    return (
        <View style={{ flexDirection: 'row', height: 120, justifyContent: isOwn ? 'flex-end' : 'flex-start', ...style }}>
            <View style={{ flex: 1, maxWidth: '40%' }}>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        zIndex: 99999,
                        ...timeBadgeStyle
                    }}
                >
                    <View style={{
                        backgroundColor: 'rgba( 0, 0, 0, 0.3);',
                        borderRadius: 5,
                        paddingBottom: 2,
                        paddingHorizontal: 5
                    }}>
                        <Text style={[ human.footnote, { color: '#fff' } ]}>
                            10:35
                        </Text>
                    </View>
                </View>
                <LottieView
                    source={sticker.source}
                    autoPlay
                    loop
                />
            </View>
        </View>
    )
};

const Message = ({ item, user }) => {
    const isSticker = item.type === Fake.MESSAGE_TYPE_STICKER;

    if (isSticker) {
        const { pack, id } = item.sticker;
        const sticker = Stickers[pack][id];

        return <StickerMessage isOwn={item.isOwn} sticker={sticker} />
    }

    const isMedia = item.type === Fake.MESSAGE_TYPE_MEDIA;

    return (
        <View style={{ flexDirection: 'row', padding: 15, justifyContent: item.isOwn ? 'flex-end' : 'flex-start' }}>
            <View style={{ backgroundColor: '#f0f1f4', padding: 10, borderRadius: 10, maxWidth: '70%' }}>
                <Text style={[ human.callout, { paddingBottom: 10 } ]}>
                    { user.name }
                </Text>
                <Text>
                    { item.message }
                </Text>
            </View>
        </View>
    );
};

const Input = () => {
    return (
        <View style={{
            flexDirection: 'row',
            flex: 8,
            borderTopColor: 'rgba( 0, 0, 0, 0.1);',
            borderTopWidth: 1
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15 }}>
                <Icon name={'slightly-smile'} size={25} color={'#b2b5b9'} />
            </View>
            <View style={{ flex: 7, width: '100%', paddingHorizontal: 10 }}>
                <TextInput
                    value={'What are you doing now?)'}
                    onChangeValue={() => {}}
                />
            </View>
            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15 }}>
                <Icon name={'paperclip'} size={25} color={'#b2b5b9'} />
                <Icon name={'instagram'} size={25} color={'#b2b5b9'} />
            </View>
        </View>
    )
};

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
                            <Message item={item} user={item.user} />
                        )}
                        keyExtractor={(item, index) => `__${index}`}
                        initialScrollIndex={Fake.MESSAGES.length - 1}
                    />
                </View>
            </UIView>

            <UIView style={{ justifyContent: 'flex-end', flex: 2 }}>
                <Input />
            </UIView>
        </View>
    )
}
