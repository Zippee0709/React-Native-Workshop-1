import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const PaginateStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    container__bullet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container__bullet__item: {
        marginHorizontal: '2%',
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#f9b566'
    },
    container__bullet__item__selected: {
        marginHorizontal: '2%',
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#573353',
        borderWidth: 1,
        borderColor: '#ddd6dd',
    }
});

export default PaginateStyles;
