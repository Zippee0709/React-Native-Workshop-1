import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const TagStyles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 25,
        height: 30,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'black',
        fontSize: RFPercentage(2),
    }
});

export default TagStyles;
