import React, { useState } from 'react';
import {
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const inputHandler = (inputValue) => {
        setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
    }

    const resetButtonOnClick = () => {
        setEnteredValue('');
    }

    const confirmButtonOnClick = () => {

    }

    const dismissActiveComponent = () => {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={dismissActiveComponent}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input style={styles.input} blurOnSubmit keyboardType="numeric" maxLength={2} onChangeText={inputHandler} value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="reset" color={colors.accent} onPress={resetButtonOnClick} />
                        </View>
                        <View style={styles.button}>
                            <Button title="confirm" color={colors.primary} onPress={confirmButtonOnClick} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        alignItems: 'center',
        maxWidth: '80%',
        width: 300
    },
    input: {
        textAlign: 'center',
        width: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    }
});


export default StartGameScreen;