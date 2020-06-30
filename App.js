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

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoalHandler} />
            <GoalItems items={courseGoals} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        paddingTop: 40,
    }
});
