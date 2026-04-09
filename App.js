import react from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { fetchAPI } from './src/API/fetch.ts';

const Tab = createMaterialTopTabNavigator();

// PAGES
import Home from './src/pages/home.tsx';
import Map from './src/pages/map.js';

function HomeScreen() {
  const [actualCity, setActualCity] = useState({title: '', subtitle: ''});

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetchAPI({ url: 'getCity' });
        setActualCity(response);
    };

    fetchData();
  }, []);

  return (<Home {...actualCity}/>); 
}

function ReelsScreen() { return (<Map />); }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: true,
          animationEnabled: true,
          tabBarStyle: { display: 'none' },
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        
        <Tab.Screen name="Map" component={ReelsScreen} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
};