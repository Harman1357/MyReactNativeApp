import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Sample data including duration and placeholder album art
const localSongs = [
  { name: 'Lover.mp3', path: require('../assests/songs/Lover.mp3'), duration: '3:45', cover: require('../assests/images/cover1.png'), singer: 'Taylor Swift' },
  { name: 'ChargedUp.mp3', path: require('../assests/songs/ChargedUp.mp3'), duration: '4:00', cover: require('../assests/images/cover2.png'), singer: 'Drake' },
  { name: 'Mockingbird.mp3', path: require('../assests/songs/Mockingbird.mp3'), duration: '3:30', cover: require('../assests/images/cover3.png'), singer: 'Eminem' },
  { name: 'lovestory.mp3', path: require('../assests/songs/lovestory.mp3'), duration: '3:15', cover: require('../assests/images/cover4.png'), singer: 'Taylor Swift' },
  { name: 'Popstar.mp3', path: require('../assests/songs/Popstar.mp3'), duration: '3:50', cover: require('../assests/images/cover5.png'), singer: 'DJ Khaled ft. Drake' },
  { name: 'WelcometoNewYork.mp3', path: require('../assests/songs/WelcometoNewYork.mp3'), duration: '4:10', cover: require('../assests/images/cover6.png'), singer: 'Taylor Swift' },
  { name: 'BlueShoes.mp3', path: require('../assests/songs/BlueShoes.mp3'), duration: '3:20', cover: require('../assests/images/cover7.png'), singer: 'Elvis persley' },
  { name: 'BabyBeMine.mp3', path: require('../assests/songs/BabyBeMine.mp3'), duration: '3:40', cover: require('../assests/images/cover8.png'), singer: 'Michael Jackson' },
  { name: 'WithoutMe.mp3', path: require('../assests/songs/WithoutMe.mp3'), duration: '4:05', cover: require('../assests/images/cover9.png'), singer: 'Halsey' },
];

const SongsPage = ({ navigation }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    loadSongs();
    console.log(localSongs);
  }, []);

  const loadSongs = () => {
    setSongs(localSongs);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.songItem} 
        onPress={() => navigation.navigate('Now Playing', { song: item })}
      >
        <Image source={item.cover} style={styles.cover} />
        <View style={styles.songDetails}>
          <Text style={styles.songTitle}>{item.name.replace('.mp3', '')}</Text>
          <Text style={styles.songArtist}>{item.singer}</Text>
          <Text style={styles.songDuration}>{item.duration}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Songs List</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 16,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  cover: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2d3436',
  },
  songArtist: {
    fontSize: 16,
    color: '#636e72',
    marginTop: 4,
  },
  songDuration: {
    fontSize: 16,
    color: '#636e72',
    marginTop: 4,
  },
});

export default SongsPage;
