import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#ffffff',
    },
    backgroundImage: {
        resizeMode: 'contain',
        paddingBottom: '5%',
    },
    title: {
        color: '#222222',
        fontSize: RFPercentage(10),
    },
    description: {
        color: '#adadad',
        fontSize: RFPercentage(3)
    },
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: '#e9f8f8',
        marginTop: '5%',
        marginRight: '5%'
    },
})

export default HomeStyles;