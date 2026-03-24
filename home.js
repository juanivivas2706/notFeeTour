import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import CartaUbicacion from './componentes/ubicaciones.tsx';

export default function Home({headerProps, places}) {
  const [filters, setFilters] = useState({
    gratis: false,
    precio: false,
    distancia: false,
    restaurante: false,
    cafeterias: false,
  });

  useEffect(() => {
    console.log('Filters updated:', filters);
  }, [filters]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header props={headerProps} />
        <Filters filters={filters} setFilters={setFilters} />
        <RenderLugares places={places} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Header({ props }) {
  return (
    <View style={styles.Header}>
      <Image source={{ uri: props.image }} style={styles.Header.image} />
      <View style={styles.Header.overlay} />
      <Text style={styles.Header.text}>{props.title}</Text>
      <Text style={styles.Header.subtitle}>{props.subtitle}</Text>
    </View>
  );
}

function Filters({ filters, setFilters }) {
  return (
    <View style={styles.filters}>
      <Text style={styles.filters.text}>Filtros: </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
        <ButtonRectangular title="Gratis" selected={filters.gratis} onPress={() => setFilters({...filters, gratis: !filters.gratis})} />
        <ButtonRectangular title="Precio" selected={filters.precio} onPress={() => setFilters({...filters, precio: !filters.precio})} />
        <ButtonRectangular title="Distancia" selected={filters.distancia} onPress={() => setFilters({...filters, distancia: !filters.distancia})} />
        <ButtonRectangular title="Restaurante" selected={filters.restaurante} onPress={() => setFilters({...filters, restaurante: !filters.restaurante})} />
        <ButtonRectangular title="Cafeterias" selected={filters.cafeterias} onPress={() => setFilters({...filters, cafeterias: !filters.cafeterias})} />
      </ScrollView>
    </View>
  );
}

function RenderLugares({ places }) {
  return (
    <View style={styles.renderLugares}>
      <Text style={styles.renderLugares.text}>Recomendados: </Text>
      <ScrollView
        style={styles.renderLugares.cardsScroll}
        contentContainerStyle={styles.renderLugares.cardsContent}
        showsVerticalScrollIndicator={false}
      >
        {places.map((lugar, index) => (
          <CartaUbicacion key={index}
            title={lugar.nombre}
            subtitle={lugar.descripcion}
            image={lugar.imagen}
            puntaje={lugar.puntaje}
            descripcion={lugar.breveDescripcion}
            historia={lugar.historia}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function ButtonRectangular({ title, selected, onPress }) {
  return (
    <TouchableOpacity style={[styles.buttonRectangular, selected && styles.buttonSelected, { width: selected ? 100 : 80 }]} onPress={onPress}>
      <Text style={[styles.buttonRectangular.buttonText, selected && styles.buttonTextSelected]}>{title}</Text>
      {selected && <Ionicons name="close" size={16} color="#fff" style={{ marginLeft: 5 }} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  Header : {
    image: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.23)', // filtro oscuro
    },
    text: {
      color: '#fff',
      fontSize: 48,
      fontWeight: 'bold',
      left: 40,
      zIndex: 1,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
    },
    subtitle: {
      color: '#fff',
      fontSize: 18,
      left: 40,
      zIndex: 1,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
    },
    width: '100%',
    height: '30%',
    backgroundColor: '#adadad',
    justifyContent: 'center',
  },
  filters: {
    text: {
      marginLeft: 20,
      fontSize: 16,
      fontWeight: 'bold',
    },
    filtersScroll: {
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    width: '100%',
    marginTop: 20,
    alignItems: 'flex-start',
    marginLeft: 40,
    marginRight: 40,
  },  
  renderLugares: {
    text: {
      fontSize: 20,
      alignSelf: 'flex-start',
      left: 20,
      fontWeight: 'bold',
    },
    cardsScroll: {
      width: '100%',
      flex: 1,
    },
    cardsContent: {
      paddingVertical: 8,
      alignItems: 'center',
    },
    flex: 1,
    width: '100%',
    marginTop: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  buttonRectangular: {
    buttonText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    backgroundColor: '#afafaf',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    height: 35,
    flexDirection: 'row', // para alinear texto e icono
  },
  buttonSelected: {
    backgroundColor: '#007bff', // azul para seleccionado
  },
  buttonTextSelected: {
    color: '#fff', // mantener blanco, o cambiar si quieres
  },
});