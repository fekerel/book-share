import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BACKEND_URL } from '@env'; // BACKEND_URL değişkenini .env dosyasından içe aktarıyoruz

const BooksScreen = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log('url:' + BACKEND_URL)
        const response = await axios.get(BACKEND_URL + '/api/books'); // API'den tüm kitapları çek
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const renderBookCard = ({ item }) => {
    console.log(`Image URL: ${BACKEND_URL}${item.image}`); // Bu satırı ekleyin
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('BookDetails', { bookId: item.id })}
      >
        <Image
            source={{ uri: `${BACKEND_URL}${item.image}` }}
            //style={styles.bookImage}
            style={{width: 50, height: 50}}
            resizeMode="cover" // veya "contain", "stretch" olarak deneyebilirsiniz
        />

        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookLocation}>{item.location}</Text>
      </TouchableOpacity>
    );
  };
  

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderBookCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Stil ayarları
});

export default BooksScreen;
