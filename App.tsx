// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AlbumsPage from './src/albumsPage';
import SongsPage from './src/songsPage';
import NowPlayingPage from './src/nowPlayingPage';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistsPage from './src/artistPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MusicTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Artists"
        component={ArtistsPage}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="musical-notes" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsPage}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="albums" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Songs"
        component={SongsPage}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="musical-note" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Now Playing"
        component={NowPlayingPage}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="play-circle" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Music" component={MusicTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
