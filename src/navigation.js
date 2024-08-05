import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SongsPage from './pages/SongsPage';
import NowPlayingPage from './pages/NowPlayingPage';
import ArtistsPage from './pages/ArtistsPage';
import AlbumsPage from './pages/AlbumsPage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Songs">
        <Stack.Screen name="Songs" component={SongsPage} />
        <Stack.Screen name="Now Playing" component={NowPlayingPage} />
        <Stack.Screen name="Artists" component={ArtistsPage} />
        <Stack.Screen name="Albums" component={AlbumsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
