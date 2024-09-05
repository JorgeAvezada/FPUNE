import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorage04 = () => {
  const [name, setName] = useState('');
  const [cedula, setCedula] = useState('');
  const [data, setData] = useState([]);

  const storeData = async () => {
    try {
      const newData = { name, cedula };
      await AsyncStorage.setItem(cedula, JSON.stringify(newData));
      setData([...data, newData]);
    } catch (e) {
      console.error(e);
    }
  };

  const retrieveData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      setData(result.map(req => JSON.parse(req[1])));
    } catch (e) {
      console.error(e);
    }
  };

  const updateData = async (id) => {
    try {
      const updatedData = { name, cedula };
      await AsyncStorage.setItem(cedula, JSON.stringify(updatedData));
      const newData = data.map(item => (item.cedula === id ? updatedData : item));
      setData(newData);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteData = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      const newData = data.filter(item => item.cedula !== id);
      setData(newData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Cédula"
        value={cedula}
        onChangeText={setCedula}
      />
      <Button title="Guardar" onPress={storeData} />
      <Button title="Recuperar Datos" onPress={retrieveData} />
      <FlatList
        data={data}
        keyExtractor={item => item.cedula}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.cedula}</Text>
            <Button title="Actualizar" onPress={() => updateData(item.cedula)} />
            <Button title="Eliminar" onPress={() => deleteData(item.cedula)} />
          </View>
        )}
      />
    </View>
  );
};

export default AsyncStorage04;
