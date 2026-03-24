import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './home.js';

import {header, lugares} from './componentes/bsas.json';

export default function App() {
  return (
    <View style={styles.container}>
      <Home headerProps={header} places={lugares} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});