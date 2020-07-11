import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
    const [selectedNumber, setSelectedNumber] = useState(false);

    const startGameHandler = (enteredNumber) => {
        setSelectedNumber(enteredNumber);
    }

    let content = <StartGameScreen onStartGame={startGameHandler} />;
    if (selectedNumber) {
        content = <GameScreen userChoice={selectedNumber} />;
    }

    return (
        <View style={styles.screen}>
            <Header title="Guess the number" />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
