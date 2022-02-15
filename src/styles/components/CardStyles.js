import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const CardStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 25,
        height: 300,
        width: 300,
        padding: '5%',
    },
    header: {
        flexDirection: 'column'
    },
    body: {
        flexDirection: 'column',
        justifyContent: 'space-between'        
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'
    },
    header__type: {
        fontSize: RFPercentage(3),
    },
    header__title: {
        fontSize: RFPercentage(3),
    },
    body__tags__container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '2%',
    },
    body__description: {
        fontSize: RFPercentage(2.1),
    },
    footer__button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 40,
        height: 40,
        backgroundColor: '#e9f8f8',
    },
    footer__comment: {
        alignSelf: 'center',
        alignItems: 'center',
        color: '#00c4c0',
        fontSize: RFPercentage(2),
    }

});

export default CardStyles;
