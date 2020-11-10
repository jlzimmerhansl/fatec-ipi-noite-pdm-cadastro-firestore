import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { db } from '../App';

const NewContact = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContacts = () => {
    db.collection('contacts').add({
      name: name,
      phone: phone,
      data: new Date(),
    });
    setName('');
    setPhone('');
    navigation.navigate('ContactsListScreen');
  };

  const captureName = (name) => {
    setName(name);
  };

  const capturePhone = (phone) => {
    setPhone(phone);
  };

  function handleGoBackToInitial() {
    navigation.navigate('InitialScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton style={styles.goBack} onPress={handleGoBackToInitial}>
          <Feather name="arrow-left" size={20} color={Colors.purple} />
        </RectButton>
        <Text style={styles.titelHeader}>InsiraNovoContato</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          onChangeText={captureName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          onChangeText={capturePhone}
          value={phone}
        />
        <RectButton style={styles.AddButton} onPress={addContacts}>
          <Text style={styles.ButtonText}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f5',
    paddingTop: 60,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titelHeader: {
    color: Colors.purple,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 60,
  },
  inputArea: {
    backgroundColor: Colors.purple,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    flex: 1,
    marginTop: 30,
    width: '95%',
    paddingTop: 80,
  },
  input: {
    backgroundColor: '#f2f3f5',
    borderWidth: 1.4,
    borderColor: Colors.purpleLight,
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 26,
    textAlignVertical: 'top',
    width: '90%',
  },
  AddButton: {
    backgroundColor: Colors.yellow,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
    width: '90%',
  },
  ButtonText: {
    fontSize: 16,
    color: Colors.purple,
  },
});

export default NewContact;
