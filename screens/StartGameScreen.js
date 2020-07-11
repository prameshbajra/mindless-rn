import React, { useState } from 'react';
import {
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isInputConfirmed, setIsInputConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputHandler = (inputValue) => {
        setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
    }

    const resetButtonOnClick = () => {
        setIsInputConfirmed(false);
        setEnteredValue('');
    }

    const confirmButtonOnClick = () => {
        const choosedNumber = parseInt(enteredValue);
        if (isNaN(choosedNumber) || choosedNumber <= 0 || choosedNumber > 99) {
            Alert.alert('Invalid number.', 'Please enter a valid number. It has to be in between 1 and 99.', [{
                text: 'Ok !', style: 'destructive', onPress: resetButtonOnClick
            }]);
            return;
        }
        setIsInputConfirmed(true);
        setSelectedNumber(choosedNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    const dismissActiveComponent = () => {
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (isInputConfirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" color={colors.primary} onPress={() => { props.onStartGame(selectedNumber) }} />
            </Card>
        );
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
                {confirmedOutput}
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
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
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