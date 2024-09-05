import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  const { name, estado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Nombre: {name} - Estado: {estado ? 'Activo' : 'Inactivo'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});

export default PropsParcial02;
