import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/components/TagStyles.js'

const Tag = ({ item }) => {
    return (
        <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
            <Text style={[styles.label, { color: item.color }]}>#{item.label}</Text>
        </View>
    )
}

export default Tag
