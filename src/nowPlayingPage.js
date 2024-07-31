import React from 'react';
import { View, Text, Button } from 'react-native';
import Sound from 'react-native-sound';

const NowPlayingPage = ({ route, navigation }) => {
  const { song } = route.params || {}; // Safeguard against undefined params
  const [sound, setSound] = React.useState(null);

  React.useEffect(() => {
    if (song && song.path) {
      const newSound = new Sound(song.path, '', (error) => {
        if (error) {
          console.warn('Failed to load the sound', error);
          return;
        }
        newSound.play(() => {
          newSound.release();
        });
        setSound(newSound);
      });

      return () => {
        if (newSound) {
          newSound.stop(() => {
            newSound.release();
          });
        }
      };
    }
  }, [song]);

  if (!song) {
    return (
      <View>
        <Text>No song selected. Please go back and select a song.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Now Playing: {song.name}</Text>
      {/* Additional UI components for playback control */}
      <Button title="Pause" onPress={() => sound && sound.pause()} />
      <Button title="Play" onPress={() => sound && sound.play()} />
    </View>
  );
};

export default NowPlayingPage;
