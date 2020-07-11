import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import colors from '../constants/colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 90,
        justifyContent: 'center',
        paddingTop: 30,
        width: '100%',
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    }
});

export default Header;


