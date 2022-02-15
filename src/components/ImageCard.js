import React from 'react';
import { View, Text, Image } from 'react-native';

import TextButton from './TextButton.js';
import styles from '../styles/components/ImageCardStyles.js'

const ImageCard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container__text}>
                <Text style={styles.container__text__title}>Check you profile</Text>
                <Text style={styles.container__text__mail}>zhiwen.wang@epitech.eu</Text>
                <TextButton text="View" textColor="#573353" backgroundColor="#fda758" navigation={navigation} path="Introduction1Screen"/>
            </View>
            <Image source={require('../../assets/settings.png')} style={styles.container__image}/>
        </View>
    )
}

export default ImageCard
