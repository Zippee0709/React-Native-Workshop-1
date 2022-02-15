import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import styles from '../styles/components/PressableCardStyles.js'

const PressableCard = ({ icon, title, description = null }) => {
    const renderIcon = (icon, iconColor ="#fc9d45", backgroundColor = "#fff6ee", marginLeft = 0) => {
        return (
            <View style={[styles.container__icon, {backgroundColor : backgroundColor, marginLeft : marginLeft}]}>
                <FontAwesome5 name={icon} size={24} color={iconColor} />
            </View>
        )
    }

    const renderTextContainer = () => {
        return (
            <View style={styles.container__text}>
                <Text style={styles.container__text__title}>{title}</Text>
                {description && 
                    <Text style={styles.container__text__description}>{description}</Text>
                }
            </View>
        )
    }

    return (
        <TouchableOpacity style={styles.container}>
            {renderIcon(icon)}
            {renderTextContainer()}
            {renderIcon('angle-right', '#573353', 'transparent', 'auto')}
        </TouchableOpacity>
    )
}

export default PressableCard;
