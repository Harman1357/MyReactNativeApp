import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback'); // Set audio category

const NowPlayingPage = ({ route }) => {
  const { song } = route.params || {};
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (song && song.path) {
      const newSound = new Sound(song.path, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.warn('Failed to load the sound', error);
          return;
        }
        console.log('Sound loaded successfully');
        setSound(newSound);
      });

      return () => {
        if (sound) {
          sound.stop(() => {
            sound.release();
          });
        }
      };
    }
  }, [song]);

  const handlePlayPause = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
        setIsPlaying(false);
      } else {
        sound.play((success) => {
          if (success) {
            console.log('Successfully finished playing');
          } else {
            console.log('Playback failed due to audio decoding errors');
          }
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  };

  const handlePrevious = () => {
    // Add previous track logic here
  };

  const handleNext = () => {
    // Add next track logic here
  };

  const handleShuffle = () => {
    // Add shuffle logic here
  };

  const handleAddToFavorites = () => {
    // Add to favorites logic here
  };

  if (!song) {
    return (
      <View style={styles.container}>
        <Text style={styles.noSongText}>No song selected. Please go back and select a song.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={song.cover} style={styles.cover} />
      <Text style={styles.nowPlayingText}>Now Playing: {song.name.replace('.mp3', '')}</Text>
      <Text style={styles.singerText}>Singer: {song.singer}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePrevious}>
          <Image source={require('../assests/icons/prev.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <Image source={isPlaying ? require('../assests/icons/pause.png') : require('../assests/icons/play.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Image source={require('../assests/icons/next.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShuffle}>
          <Image source={require('../assests/icons/shuffle.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddToFavorites}>
          <Image source={require('../assests/icons/favorite.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f9fc',
  },
  cover: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  nowPlayingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2d3436',
  },
  singerText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#636e72',
  },
  noSongText: {
    fontSize: 18,
    color: '#636e72',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  icon: {
    width: 50,  // Adjust icon size as needed
    height: 50, // Adjust icon size as needed
    backgroundColor: '#000000', // Black background for better visibility
    borderRadius: 25, // Rounded corners
    padding: 10, // Padding around the icon
    margin: 10, // Space around the icon
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff', // White border color for contrast
    borderWidth: 2, // Border width
    elevation: 3, // Adding shadow for better visibility
  },
});

export default NowPlayingPage;
