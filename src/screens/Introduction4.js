import React from 'react';

import Layout from './Layout.js';
import Introduction from '../components/Introduction.js';

const Introduction4 = ({ navigation }) => {
    return (
        <Layout hideStatusBar={true} marginTop={0}>
            <Introduction navigation={navigation} title={`JOIN A SUPPORTIVE ${"\n"} COMMUNITY`} step={4} nextPath="Introduction4Screen" />
        </Layout>
    )
}

export default Introduction4
