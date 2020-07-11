import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: 0.30,
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 6,
    }
});


export default Card;