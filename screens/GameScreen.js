import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { generateRandomNumber } from '../utils/utility';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import colors from '../constants/colors';

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));

    return (
        <View style={styles.screen}>
            <Text>Opponent Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" color={colors.primary} />
                <Button title="HIGHER" color={colors.primary} />
            </Card>
        </View>
    );
}



const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        flex: 1,
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        maxWidth: '80%',
        width: 300
    }
});



export default GameScreen;