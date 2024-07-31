import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';

const SongsPage = ({ navigation }) => {
  const [songs, setSongs] = React.useState([]);

  React.useEffect(() => {
    loadSongs();
  }, []);

  const loadSongs = async () => {
    try {
      const musicDir = `${RNFS.ExternalStorageDirectoryPath}/Music`;
      const files = await RNFS.readDir(musicDir);
      const songFiles = files.filter(file => file.isFile() && file.name.endsWith('.mp3'));
      setSongs(songFiles);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <Text>Songs Page</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.path}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Now Playing', { song: item })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SongsPage;
