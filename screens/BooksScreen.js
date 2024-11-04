import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BooksScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>Burada kitapları görüntüleyebilirsiniz.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    infoText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#333',
    },
});
