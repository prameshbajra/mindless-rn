import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (goalTitle) => {
        if (goalTitle.trim().length > 0) {
            setCourseGoals(currentGoals => [{ key: Math.random() + '', value: goalTitle }, ...currentGoals]);
        }
    }

    const deleteGoal = (index) => {
        setCourseGoals(currentGoals => currentGoals.filter((goal, i) => i !== index));
    }

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoalHandler} />
            <GoalItems items={courseGoals} onDelete={deleteGoal} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        paddingTop: 40,
    }
});
