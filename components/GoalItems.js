import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function GoalItems(props) {
    if (props.items.length > 0) {
        return (
            <View>
                <Text style={styles.text}>Added Items</Text>
                <FlatList data={props.items} style={styles.list} renderItem={itemData => (
                    <TouchableOpacity onPress={() => props.onDelete(itemData.index)}>
                        <View style={styles.listItem}>
                            <Text>{itemData.index + 1}. {itemData.item.value}</Text>
                        </View>
                    </TouchableOpacity>
                )} />
            </View>
        )
    } else {
        return (
            <View>
                <Text style={styles.text}>Wow, such empty!</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center'
    },
    list: {
        marginTop: 20
    },
    listItem: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 50,
        marginVertical: 2,
        padding: 10,
    }
});


