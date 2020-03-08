import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ onHome, icon, outside }) => {
    const navigation = useNavigation();


    return (
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name={icon}
                  size={25}
                  color={'#000'}
                  onPress={() => {
                      if (onHome) {
                          navigation.goBack(null);
                      } else {
                          if (outside) {
                              navigation.goBack(null);
                              return true;
                          }

                          navigation.goBack()
                      }
                  }}
            />
        </TouchableOpacity>
    )
};

BackButton.defaultProps = {
    onHome: false,
    icon: 'arrow-left',
    outside: false
};

export default BackButton;
