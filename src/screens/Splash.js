import React from 'react';
import { Image, ImageBackground } from 'react-native';

import Layout from './Layout.js';
import Introduction from '../components/Introduction.js';

import styles from '../styles/SplashStyles.js';

const Splash = ({ navigation }) => {
    const image = require('../../assets/splash.png');

    return (
        <Layout hideStatusBar={true} marginTop={0}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            </ImageBackground>
        </Layout>
    )
}

export default Splash
