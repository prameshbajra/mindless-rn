import { React } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';



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
        backgroundColor: '#f7287b',
        height: 90,
        justifyContent: 'center',
        paddingTop: 30,
        width: '100%',
    }, headerTitle: {
        color: 'black',
        fontSize: 18
    }
});


export default Header;


