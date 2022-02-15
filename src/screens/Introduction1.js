import React from 'react';

import Layout from './Layout.js';
import Introduction from '../components/Introduction.js';

const Introduction1 = ({ navigation }) => {
    return (
        <Layout hideStatusBar={true} marginTop={0}>
            <Introduction navigation={navigation} title={`WELCOME TO ${"\n"} MONUMENTAL HABITS`} step={1} nextPath="Introduction2Screen" />
        </Layout>
    )
}

export default Introduction1
