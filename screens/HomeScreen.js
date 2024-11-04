import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { BACKEND_URL } from '@env'; // BACKEND_URL değişkenini .env dosyasından içe aktarıyoruz

export default function HomeScreen({ navigation }) {
    const handleStart = async () => {
        try {
            // API isteği
            const response = await axios.get(BACKEND_URL + '/api/start'); // Ngrok URL'sini burada kullanabilirsiniz
            console.log(response.data);

            // API yanıtını başarılı olarak aldık, Books ekranına yönlendiriyoruz
            navigation.navigate('Books');
        } catch (error) {
            console.error('API isteğinde hata:', error);
            Alert.alert('Hata', 'API isteğinde bir sorun oluştu');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>KitapPaylaş uygulamasına hoşgeldiniz!</Text>
            <Button title="Başla" onPress={handleStart} />
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
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});
