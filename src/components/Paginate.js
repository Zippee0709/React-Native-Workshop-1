import React from 'react';
import { View, Text } from 'react-native';

import TextButton from './TextButton.js';
import styles from '../styles/components/PaginateStyles.js';

const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const Paginate = ({ navigation, step, maxStep, skipPath, nextPath }) => {
    const array = range(1, maxStep);

    const renderButtetPoint = () => {
        return (
            // <Text>Test</Text>
            array.map((item => {
                if (item == step) {
                    return (
                        <View key={item} style={styles.container__bullet__item__selected}></View>
                    )
                }
                return (
                    <View key={item} style={styles.container__bullet__item}></View>
                )
            }))
        )
    }
    return (
        <View style={styles.container}>
            <TextButton text="skip" textColor="#573353" backgroundColor="transparent" width={60} navigation={navigation} path={skipPath}/>
            <View style={styles.container__bullet}>
                {renderButtetPoint()}
            </View>
            <TextButton text="next" textColor="#573353" backgroundColor="transparent" width={60} navigation={navigation} path={nextPath} />
        </View>
    )
}

export default Paginate
