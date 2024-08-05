// App.js
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AlbumsPage from './src/pages/albumsPage';
import SongsPage from './src/pages/songsPage';
import NowPlayingPage from './src/pages/nowPlayingPage';
import ArtistsPage from './src/pages/artistPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PRIMARY_COLOR = '#4a90e2'; // Blue
const LIGHT_PRIMARY_COLOR = '#e1f5fe'; // Light blue

const MusicTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: LIGHT_PRIMARY_COLOR, // Light blue for tab bar
          borderTopWidth: 0, // Remove top border
        },
        tabBarLabelStyle: {
          fontSize: 12, // Smaller font size
        },
        headerStyle: {
          backgroundColor: PRIMARY_COLOR, // Blue for header
        },
        headerTintColor: '#ffffff', // White text color for header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Artists"
        component={ArtistsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./src/assests/icons/artist.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./src/assests/icons/albums.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name=" Songs"
        component={SongsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./src/assests/icons/songs.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Now Playing"
        component={NowPlayingPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./src/assests/icons/nowPlaying.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Music"
          component={MusicTabs}
          options={{
            headerShown: false, // Hide the default header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
