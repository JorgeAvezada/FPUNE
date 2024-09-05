import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState([]);
  
  useEffect(() => {
    leerDatos();
  }, []);

  const guardarDatos = async () => {
    const newData = { codigo, materia };
    const existingData = await AsyncStorage.getItem('calificaciones');
    const parsedData = existingData ? JSON.parse(existingData) : [];
    parsedData.push(newData);
    await AsyncStorage.setItem('calificaciones', JSON.stringify(parsedData));
    leerDatos();
  };

  const leerDatos = async () => {
    const storedData = await AsyncStorage.getItem('calificaciones');
    setCalificaciones(storedData ? JSON.parse(storedData) : []);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={styles.input}
      />
      <Button title="Guardar" onPress={guardarDatos} />
      <FlatList
        data={calificaciones}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>Código: {item.codigo}</Text>
            <Text style={styles.text}>Materia: {item.materia}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f8ff',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    color: 'blue',
  },
});

export default AsyncStorageParcial04;
