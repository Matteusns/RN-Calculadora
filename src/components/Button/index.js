import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.btnAction) stylesButton.push(styles.operationButton)


    return(
        <TouchableOpacity style={stylesButton} onPress={() => props.onClick(props.label)} >
            <Text style={styles.buttonText}>
                {props.icon ? <Icon name={`${props.icon}`} size={20} color="#fff" /> : props.label}
            </Text>
        </TouchableOpacity>
    )
}