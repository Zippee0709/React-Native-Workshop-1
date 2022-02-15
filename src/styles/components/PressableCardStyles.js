import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const PressableCardStyles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    container__icon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container__text: {
        marginLeft: '3%'
    },
    container__text__title: {
        fontSize: RFPercentage(2.5),
        color: '#573353',
    },
    container__text__description: {
        fontSize: RFPercentage(2),
        color: '#b5a6b3',
    }
});

export default PressableCardStyles;
