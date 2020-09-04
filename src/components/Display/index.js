import React from 'react'
import { Text, View } from 'react-native'
import Styles from './Styles'

export default props => {
    return(
        <View style={Styles.container}>
            <Text
                style={Styles.displayValue}
                numberOfLines={1}
            >
                {props.value}
            </Text>
            <Text style={Styles.displayPreview} numberOfLines={1}>
                {props.preview}
            </Text>
        </View>
    )
}