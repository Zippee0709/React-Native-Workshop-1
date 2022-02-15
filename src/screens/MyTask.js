import React from 'react';
import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Layout from './Layout.js';
import Card from '../components/Card.js';
import styles from '../styles/MyTaskStyles.js';

const LIST_OF_TASKS = [
    {
        id: 1,
        title : 'Create a new landing page Hero image',
        type : {
            label: 'DESIGN',
            color: '#009d99'
        },
        tags : [
            {
                label : 'Design',
                backgroundColor : '#fff5d9',
                color : '#ffc100'
            },
            {
                label : 'Visual',
                backgroundColor : '#fff5d9',
                color : '#ffc100'
            },
            {
                label : 'Design',
                backgroundColor : '#a939ff',
                color : '#efd8ff'
            }
        ],
        description: 'Design team is involved to create a new hero image for landing page, this should be 1440x900 px, it needs to be peacefull and light'
    },
    {
        id: 2,
        title : 'Create a new landing page Hero image',
        type : {
            label: 'DESIGN',
            color: '#009d99'
        },
        tags : [
            {
                label : 'Design',
                backgroundColor : '#fff5d9',
                color : '#ffc100'
            },
            {
                label : 'Visual',
                backgroundColor : '#fff5d9',
                color : '#ffc100'
            },
            {
                label : 'Design',
                backgroundColor : '#a939ff',
                color : '#efd8ff'
            }
        ],
        description: 'Design team is involved to create a new hero image for landing page, this should be 1440x900 px, it needs to be peacefull and light'
    },
]

const MyTask = ({ navigation }) => {

    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <View style={styles.header__container}>
                    <Text style={styles.header__container__title}>My Task</Text>
                    <Text style={styles.header__container__decription}>You have 4 tasks today</Text>
                </View>
                <Image source={require('../../assets/profile_pic.png')} style={styles.header__avatar} />
            </View>
        )
    }

    const renderBody = () => {
        return (
            <FlatList
                data={LIST_OF_TASKS}
                renderItem={({item}) => <Card item={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                ItemSeparatorComponent={() => <View style={styles.list__separator}/>}                
            />
        )
    }

    const renderFooter = () => {
        return (
            <TouchableOpacity style={styles.footer__button} onPress={() => navigation.navigate('Settings')}>
                <FontAwesome5 name="plus" size={32} color="#00c4c0" />
            </TouchableOpacity>
        )
    }

    return (
        <Layout statusBarColor="#00c4c0">
            <View style={styles.container}>
                {renderHeader()}
                {renderBody()}
                {renderFooter()}
            </View>
        </Layout>
    )
}

export default MyTask
