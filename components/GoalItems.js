import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function GoalItems(props) {
    return (
        <FlatList data={props.items} style={styles.list} renderItem={itemData => (
            <TouchableOpacity onPress={() => props.onDelete(itemData.index)}>
                <View style={styles.listItem}>
                    <Text>{itemData.index + 1}. {itemData.item.value}</Text>
                </View>
            </TouchableOpacity>
        )} />
    )
}


const styles = StyleSheet.create({
    list: {
        marginTop: 20,
        padding: 10
    },
    listItem: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 50,
        marginVertical: 2,
        padding: 10,
    }
});


