import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Tag from './Tag.js'
import styles from '../styles/components/CardStyles.js';

const Card = ({ item }) => {
    const renderTags = () =>  item.tags.map((tag, key) => <Tag key={key} item={tag}/>)

    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={[styles.header__type, { color : item.type.color }]}>{item.type.label}</Text>
                <Text style={styles.header__title}>{item.title}</Text>
            </View>
        )
    }

    const renderBody = () => {
        return (
            <View style={styles.body}>
                <View style={styles.body__tags__container}>
                    {renderTags()}
                </View>
                <Text style={styles.body__description}>{item.description}</Text>
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View style={styles.footer}>
                <Text style={styles.footer__comment}>3 Comments</Text>
                <TouchableOpacity style={styles.footer__button}>
                    <FontAwesome5 name="arrow-right" size={24} color="#00c4c0" />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
        </View>
    )
}

export default Card
