import React from "react";
import { Text, View } from "react-native";
import { human } from "react-native-typography";

import { Fake } from "../../utils";
import Stickers from "../../stickers/Stickers";
import StickerMessage from "./StickerMessage";

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

export default Message;
