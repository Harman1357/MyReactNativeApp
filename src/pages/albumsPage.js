import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const albums = [
  { title: '1989', artist: 'Taylor Swift', image: require('../assests/images/1989.png'), releaseDate: '2014-10-27', genre: 'Pop', description: 'Taylor Swift’s fifth studio album.' },
  { title: 'Take Care', artist: 'Drake', image: require('../assests/images/take_care.png'), releaseDate: '2011-11-15', genre: 'Hip Hop', description: 'Drake’s second studio album.' },
  { title: 'The Eminem Show', artist: 'Eminem', image: require('../assests/images/the_eminem_show.png'), releaseDate: '2002-05-26', genre: 'Hip Hop', description: 'Eminem’s fourth studio album.' },
  { title: 'Invasion of Privacy', artist: 'Cardi B', image: require('../assests/images/invasion_of_privacy.png'), releaseDate: '2018-04-06', genre: 'Hip Hop', description: 'Cardi B’s debut studio album.' },
  { title: 'When We All Fall Asleep, Where Do We Go?', artist: 'Billie Eilish', image: require('../assests/images/when_we_all_fall_asleep.png'), releaseDate: '2019-03-29', genre: 'Pop', description: 'Billie Eilish’s debut studio album.' },
  { title: 'Elvis Presley', artist: 'Elvis Presley', image: require('../assests/images/elvis_presley.png'), releaseDate: '1956-01-01', genre: 'Rock and Roll', description: 'Elvis Presley’s self-titled debut album.' },
  { title: 'Thriller', artist: 'Michael Jackson', image: require('../assests/images/thriller.png'), releaseDate: '1982-11-30', genre: 'Pop', description: 'Michael Jackson’s sixth studio album.' },
  // Add more albums if needed
];

const AlbumsPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handlePress = (album) => {
    setSelectedAlbum(selectedAlbum === album ? null : album);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Albums</Text>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.albumItem} onPress={() => handlePress(item)}>
              <Image source={item.image} style={styles.albumImage} />
              <Text style={styles.albumTitle}>{item.title}</Text>
              <Text style={styles.albumArtist}>{item.artist}</Text>
            </TouchableOpacity>
            {selectedAlbum === item && (
              <View style={styles.albumDetails}>
                <Text style={styles.albumDetailsText}>Release Date: {item.releaseDate}</Text>
                <Text style={styles.albumDetailsText}>Genre: {item.genre}</Text>
                <Text style={styles.albumDetailsText}>Description: {item.description}</Text>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  albumItem: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  albumImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  albumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  albumArtist: {
    fontSize: 16,
    color: '#666',
  },
  albumDetails: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 8,
  },
  albumDetailsText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});

export default AlbumsPage;
