
import React from 'react';
import { View, Text, Image } from 'react-native';

import Paginate from './Paginate.js';
import TextButton from './TextButton.js';
import styles from '../styles/components/IntroductionStyles.js';

const Introduction = ({ navigation, title, step, nextPath }) => {
    const step1Image = require('../../assets/intro.png');
    const step2Image = require('../../assets/habits.png');
    const step3Image = require('../../assets/progress.png');
    const step4Image = require('../../assets/community_support.png');

    const getStepImage = () => {
        if (step == 1)
            return step1Image;
        if (step == 2)
            return step2Image;
        if (step == 3)
            return step3Image;
        return step4Image;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.image} source={getStepImage()}/>
            <Text style={styles.description}>WE CAN HELP YOU TO BE BETTER {"\n"} VERSION OF YOUSELF.</Text>
            {step == 4 ?
                <TextButton text="Get Started" textColor="#573353" backgroundColor="#fda758" width="80%" height={60} navigation={navigation} path="Home"/>
                :
                <Paginate navigation={navigation} step={step} maxStep={4} skipPath="Introduction4Screen" nextPath={nextPath} />
            }
        </View>
    )
}

export default Introduction
