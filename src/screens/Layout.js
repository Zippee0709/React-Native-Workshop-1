// Import from React
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
// Import from our files
import LayoutStyles from '../styles/LayoutStyles.js';

const Layout = ({ children, statusBarColor = "#ffffff", hideStatusBar = false, marginTop = null}) => {
    return (
        <SafeAreaView style={[LayoutStyles.container, {marginTop: marginTop == null ? StatusBar.currentHeight : 0}]}>
            {children}
            <StatusBar style='auto' translucent backgroundColor={statusBarColor} hidden={hideStatusBar}/>
        </SafeAreaView>
    );
}

export default Layout;