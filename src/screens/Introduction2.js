import React from 'react';

import Layout from './Layout.js';
import Introduction from '../components/Introduction.js';

const Introduction2 = ({ navigation }) => {
    return (
        <Layout hideStatusBar={true} marginTop={0}>
            <Introduction navigation={navigation} title={`CREATE NEW ${"\n"} HABIT EASILY`} step={2} nextPath="Introduction3Screen" />
        </Layout>
    )
}

export default Introduction2
