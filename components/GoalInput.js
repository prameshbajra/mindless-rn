import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


export default function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter something ..." style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
            <View style={styles.button}>
                <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 50,
        padding: 5,
        flex: 2
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        flex: 5,
        padding: 5,
        paddingHorizontal: 20
    }
});

