import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const TextButtonStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 40,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
    },
    container__text: {
        flex: 1,
        flexDirection: 'column',
        fontSize: RFPercentage(2.5),
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

export default TextButtonStyles;
