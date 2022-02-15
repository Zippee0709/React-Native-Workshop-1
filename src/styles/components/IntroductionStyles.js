import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const IntroductionStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: '15%',
    },
    title: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#573353',
    },
    description: {
        fontSize: RFPercentage(3),
        textAlign: 'center',
        color: '#573353',
    },
    subText: {
        fontSize: RFPercentage(3),
        textAlign: 'center',
        color: '#573353',
    },
    image: {
        resizeMode: 'contain',
        height: 350,
        width: 300,
    }
});

export default IntroductionStyles;
