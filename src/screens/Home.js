import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Layout from './Layout.js';
import { FontAwesome5 } from '@expo/vector-icons'; 

import styles from '../styles/HomeStyles.js';

const Home = ({ navigation }) => {
    return (
        <Layout >
            <View style={styles.container}>
                <Image source={require('../../assets/woman.png')} style={styles.backgroundImage}/>
                <Text style={styles.title}>Never more in rush</Text>
                <Text style={styles.description}>Check and keep under control you daily task, is a creative way</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyTask')} >
                    <FontAwesome5 name="arrow-right" size={24} color="#00c4c0" />
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default Home
