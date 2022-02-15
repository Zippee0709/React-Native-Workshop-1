import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const MyTaskStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#00c4c0',
    },
    header: {
        height: 100,
        marginVertical: '10%',
        flexDirection: 'row',
    },
    header__container: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
    },
    header__container__title: {
        fontSize: RFPercentage(6),
        color: '#ffffff',
    },
    header__container__decription: {
        fontSize: RFPercentage(2),
        color: '#a7e8e6'
    },
    header__avatar: {
        alignSelf: 'center',
        width: 40,
        height: 40,
    },
    list__separator: {
        marginHorizontal: 10
    },
    footer__button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: '#e9f8f8',
    },
})

export default MyTaskStyles;