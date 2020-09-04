import React, {Component} from 'react'
import { View, SafeAreaView } from 'react-native'
import Styles from './Styles'

import Button from  './components/Button'
import Display from './components/Display'

const initialState = {
    displayValue: '0',
    preview: '',
    lastCharacter : ''
}

export default class App extends Component {
    
    state = {...initialState}
    
    addDigito = n =>{
        const displayValue = this.state.displayValue === '0' ? `${n}`: `${this.state.displayValue}${n}`
        const lastCharacter = displayValue.substring(displayValue.length -1)
        const resu = eval(displayValue)
        const preview = resu == displayValue ?  '' : resu
        this.setState({displayValue, preview : preview, lastCharacter});
    }

    setOperation = operation => {
        let displayValue = `${this.state.displayValue}`, 
            preview = this.state.preview,
            lastCharacter= this.state.lastCharacter
            
        switch (operation) {
            case '=':
                displayValue = preview? preview : displayValue
                this.setState({displayValue, preview: ''});
                break;
            case 'EX':
                displayValue = displayValue !== '0' ? displayValue.substr(0, displayValue.length - 1) : '0'
                lastCharacter = displayValue.substring(displayValue.length -1);
                this.setState({displayValue: !displayValue? '0' : displayValue, lastCharacter});
                break;
            default:
                let reg = new RegExp(/[0-9]/g);
                if (!reg.test(lastCharacter) &&  displayValue !== '0'){
                    displayValue = displayValue.substr(0, displayValue.length - 1) + `${operation}`
                }else {
                    displayValue = displayValue !== '0'  ? `${this.state.displayValue}${operation}`: '0';
                }
                lastCharacter = displayValue.substring(displayValue.length -1)

                this.setState({displayValue, lastCharacter});
                break;
        }
    }

    clearMemory = () =>{
        this.setState({ ...initialState})
    }

    render() {
        return(
            <SafeAreaView style={Styles.container}>
                <Display value={this.state.displayValue} preview={this.state.preview}/>
                <View style={Styles.buttons}>
                    <Button onClick={this.clearMemory} double={true} label='AC'/>
                    <Button onClick={this.setOperation} label='EX' icon='backspace'/>
                    <Button onClick={this.setOperation} btnAction={true} label='/' icon='divide' />
                    <Button onClick={this.addDigito} label='7'/>
                    <Button onClick={this.addDigito} label='8'/>
                    <Button onClick={this.addDigito} label='9'/>
                    <Button onClick={this.setOperation} btnAction={true} label='*' icon='times' />
                    <Button onClick={this.addDigito} label='4'/>
                    <Button onClick={this.addDigito} label='5'/>
                    <Button onClick={this.addDigito} label='6'/>
                    <Button onClick={this.setOperation} btnAction={true} label='-' icon='minus' />
                    <Button onClick={this.addDigito} label='1'/>
                    <Button onClick={this.addDigito} label='2'/>
                    <Button onClick={this.addDigito} label='3'/>
                    <Button onClick={this.setOperation} btnAction={true} label='+'icon='plus' />
                    <Button onClick={this.addDigito} double={true} label='0'/>
                    <Button onClick={this.addDigito} label='.'/>
                    <Button onClick={this.setOperation} btnAction={true} label='='icon='equals'/>
                </View>
            </SafeAreaView>
        )
    }
}