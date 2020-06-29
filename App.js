import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    const addGoalHandler = () => {
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter something ..." style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <Button title="Add" onPress={addGoalHandler} />
            </View>
            <View>
                {
                    courseGoals.map((goal) => {
                        return (
                            <Text>{goal}</Text>
                        )
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 40
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 3,
        width: '80%'
    }
});
