import React from "react";
import { Text, View } from "react-native";
import { human } from "react-native-typography";
import LottieView from "lottie-react-native";

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

export default StickerMessage;
