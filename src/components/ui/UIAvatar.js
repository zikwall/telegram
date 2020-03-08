import PropTypes from 'prop-types';
import React from 'react';
import { Image, View } from 'react-native';

const UIAvatar = ({ src, size, style, badgeRight, isRounded, ...props }) => {
    return (
        <View>
            <Image
                style={{
                    width: size,
                    height: size,
                    borderRadius: isRounded ? size / 2 : size / 10,
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 0.1,
                    ...style
                }}
                {...props}
                source={ src }
            />
            {
                badgeRight &&
                <View style={{
                    position: 'absolute',
                    right: -3,
                    bottom: -3,
                }}>
                    { badgeRight }
                </View>
            }
        </View>
    )
};

UIAvatar.defaultProps = {
    src: { uri: 'https://avatars.githubusercontent.com/ammorium?v=3&s=100' },
    size: 40,
    badgeRight: undefined,
    isRounded: true
};

UIAvatar.propTypes = {
    size: PropTypes.number,
    isRounded: PropTypes.bool
};

export default UIAvatar;
