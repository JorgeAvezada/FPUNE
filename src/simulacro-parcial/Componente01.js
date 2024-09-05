import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Componente01 = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  return (
    <View>
      <Text>Pantalla Principal</Text>
      <TextInput
        placeholder="Ingresa un texto"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Ir a Props02" onPress={() => navigation.navigate('Props02', { nombre: inputValue, estado: false })} />
      <Button title="Ir a Axios03" onPress={() => navigation.navigate('Axios03')} />
      <Button title="Ir a AsyncStorage04" onPress={() => navigation.navigate('AsyncStorage04')} />
    </View>
  );
};

export default Componente01;
