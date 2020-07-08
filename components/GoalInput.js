import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, TextInput, View, Text } from 'react-native';


export default function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    const addOnPressHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter something ..." style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
            <TouchableOpacity onPress={addOnPressHandler}>
                <View style={styles.button}>
                    <Text style={{ color: 'blue' }}>Add</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
        marginVertical: 20,
        padding: 10,
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        padding: 5,
        paddingHorizontal: 20
    }
});

