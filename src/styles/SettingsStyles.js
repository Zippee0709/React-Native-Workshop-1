import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const SettingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff3e9',
        padding: '5%',
    },

    // HEADER //
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: '2%'
    },
    header__button: {
        position: 'absolute',
        left: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 40,
        height: 40,
        backgroundColor: '#dfcfcd',
    },
    header__title: {
        fontSize: RFPercentage(3),
        color: '#573353',
        fontWeight: 'bold',
    },

    // SECTION //

    section__title: {
        color: '#573353',
        fontWeight: '600',
        fontSize: RFPercentage(2.5),
        marginVertical: '2%'
    },

    general__container: {
        height: 60 * 2 + 10,
        justifyContent: 'space-between',
    },

    support__container: {
        height: 60 * 4 + 40,
        justifyContent: 'space-between',
    }
    
});

export default SettingsStyles;
