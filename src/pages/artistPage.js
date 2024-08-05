import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Sample data including images and additional details
const artists = [
  { name: 'Taylor Swift', image: require('../assests/images/taylor_swift.png'), details: 'American singer, 14.1 million monthly listeners' },
  { name: 'Drake', image: require('../assests/images/drake.png'), details: 'Canadian rapper, 17.2 million monthly listeners' },
  { name: 'Eminem', image: require('../assests/images/eminem.png'), details: 'American rapper, 12.5 million monthly listeners' },
  { name: 'Cardi B', image: require('../assests/images/cardi_b.png'), details: 'American rapper, 10.8 million monthly listeners' },
  { name: 'Billie Eilish', image: require('../assests/images/billie_eilish.png'), details: 'American singer, 16.3 million monthly listeners' },
  { name: 'Elvis Presley', image: require('../assests/images/elvis_presley.png'), details: 'American singer, 8.7 million monthly listeners' },
  { name: 'Michael Jackson', image: require('../assests/images/michael_jackson.png'), details: 'American singer, 11.2 million monthly listeners' },
  // Add more artists if needed
];

const ArtistsPage = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handlePress = (artist) => {
    setSelectedArtist(selectedArtist === artist ? null : artist);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Artists</Text>
      <FlatList
        data={artists}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.artistItem} onPress={() => handlePress(item)}>
              <Image source={item.image} style={styles.artistImage} />
              <Text style={styles.artistName}>{item.name}</Text>
            </TouchableOpacity>
            {selectedArtist === item && (
              <View style={styles.artistDetails}>
                <Text style={styles.artistDetailsText}>{item.details}</Text>
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
  artistItem: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  artistName: {
    fontSize: 18,
    color: '#333',
  },
  artistDetails: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 8,
  },
  artistDetailsText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ArtistsPage;
