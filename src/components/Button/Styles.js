import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    button : {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#303030',
    },
    buttonText : {
        fontSize: 30,
        color: '#fff',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#1976d2',
        borderLeftWidth: 1,
        borderLeftColor: 'rgba(255, 255, 255, 0.7)',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})