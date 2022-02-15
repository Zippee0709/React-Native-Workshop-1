import React from 'react';

import Layout from './Layout.js';
import Introduction from '../components/Introduction.js';

const Introduction3 = ({ navigation }) => {
    return (
        <Layout hideStatusBar={true} marginTop={0}>
            <Introduction navigation={navigation} title={`KEEP TRACK OF YOUR ${"\n"} PROGRESS`} step={3} nextPath="Introduction4Screen" />
        </Layout>
    )
}

export default Introduction3
