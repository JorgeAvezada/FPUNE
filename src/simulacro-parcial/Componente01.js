import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComponenteParcial01 = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const items = [
    { key: 'PropsParcial02', title: 'PropsParcial02' },
    { key: 'AxiosParcial03', title: 'AxiosParcial03' },
    { key: 'AsyncStorageParcial04', title: 'AsyncStorageParcial04' },
  ];

  const handlePress = (item) => {
    navigation.navigate(item.key, { name, estado: false });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre"
        value={name}
        onChangeText={setName}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={styles.listItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
  },
  listItem: {
    fontSize: 18,
    color: 'blue',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#f0f8ff',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ComponenteParcial01;
