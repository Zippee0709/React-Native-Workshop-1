import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from '../styles/components/TextButtonStyles.js';

const TextButton = ({ text, textColor = "white", backgroundColor = "black", height = 40, width = 140, navigation = null, path = null}) => {
    return (
        <TouchableOpacity 
            style={[
                styles.container, 
                {
                    backgroundColor: backgroundColor, 
                    height: height, 
                    width: width,
                }
            ]}
            onPress={() => navigation ? navigation.navigate(path) : null}
        >
            <Text style={[styles.container__text, { color: textColor}]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default TextButton
