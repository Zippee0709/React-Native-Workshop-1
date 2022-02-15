import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const CardStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 25,
        height: 150,
        width: "100%",
        alignSelf: 'center',
        padding: '5%'
    },
    container__text: {
        flex: 1,
        flexDirection: 'column',
    },
    container__text__title: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: '#573353',
    },
    container__text__mail: {
        fontSize: RFPercentage(2),        
        color: '#b5a6b3',
    },
    container__image: {
        position: 'absolute',
        right: 0,
        resizeMode: 'contain',
        zIndex: -1,
    }
});

export default CardStyles;
