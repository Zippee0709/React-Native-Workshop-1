import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Layout from './Layout.js';
import ImageCard from '../components/ImageCard.js';
import PressableCard from '../components/PressableCard.js';

import styles from '../styles/SettingsStyles.js';

const Settings = ({ navigation }) => {

    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.header__button} onPress={() => navigation.navigate('Home')}>
                    <FontAwesome5 name="arrow-left" size={24} color="#573353" />
                </TouchableOpacity>
                <Text style={styles.header__title}>Settings</Text>
            </View>
        )
    }

    const renderGeneralItems = () => {
        return (
            <View style={styles.general__container}>
                <PressableCard icon="bell" title="Notifications" description="Customize notifications"/>
                <PressableCard icon="dot-circle" title="More customization" description="Customize it more to fit you usage"/>
            </View>
        )
    }

    const renderSupportItems = () => {
        return (
            <View style={styles.support__container}>
                <PressableCard icon="phone-square-alt" title="Contact"/>
                <PressableCard icon="heart" title="Feedback" />
                <PressableCard icon="shield-alt" title="Privacy Policy"/>
                <PressableCard icon="exclamation-circle" title="About" />
            </View>
        )        
    }

    const renderSection = (name) => {
        return (
            <Text style={styles.section__title}>{name}</Text>
        )
    }

    return (
        <Layout statusBarColor="#fff3e9">
            <ScrollView>
                <View style={styles.container}>
                    {renderHeader()}
                    <ImageCard navigation={navigation} />
                    {renderSection('General')}
                    {renderGeneralItems()}
                    {renderSection('Support')}
                    {renderSupportItems()}
                </View>
            </ScrollView>
        </Layout>
    )
}

export default Settings
