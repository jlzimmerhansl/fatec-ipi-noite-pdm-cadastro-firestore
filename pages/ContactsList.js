import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { db } from '../App';

const ContactList = (props) => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([]);

  const removeItem = (key) => {
    Alert.alert('Apagar?', 'Quer mesmo apagar seu contato?', [
      { text: 'Cancelar' },
      {
        text: 'Confirmar',
        onPress: () => db.collection('contact').doc(key).delete(),
      },
    ]);
  };

  function handleGoBackToInitial() {
    navigation.navigate('InitialScreen');
  }

  function handleGoNewContact() {
    navigation.navigate('NewContactScreen');
  }

  useEffect(() => {
    db.collection('contacts').onSnapshot((snapshot) => {
      let aux = [];
      snapshot.forEach((doc) => {
        aux.push({
          data: doc.data(),
          name: doc.data().name,
          phone: doc.data().phone,
          key: doc.data().id,
        });
      });
      setContacts(aux);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton style={styles.goBack} onPress={handleGoBackToInitial}>
          <Feather name="arrow-left" size={20} color={Colors.purple} />
        </RectButton>
        <Text style={styles.titelHeader}>Lista de Contatos</Text>
        <RectButton style={styles.addButton} onPress={handleGoNewContact}>
          <Feather name="plus" size={20} color={Colors.purple} />
        </RectButton>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.flatlistContainer}
          data={contacts}
          renderItem={(contact) => (
            <TouchableOpacity
              onLongPress={() => {
                removeItem(contact.item.key);
              }}
            >
              <View style={styles.itemList}>
                <Text style={styles.name}>Nome: {contact.item.name}</Text>
                <View style={styles.itemFooter}>
                  <Text style={styles.itemFooterText}>
                    Telefone: {contact.item.phone}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
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
  listContainer: {
    backgroundColor: Colors.purple,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    flex: 1,
    marginTop: 30,
    width: '95%',
    paddingTop: 80,
  },
  flatlistContainer: {
    width: '90%',
  },
  itemList: {
    backgroundColor: '#f2f3f5',
    width: '100%',
    height: 80,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    color: Colors.purple,
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: Colors.purple,
    padding: 8,
  },
  itemFooter: {
    flexDirection: 'row',
  },
  itemFooterText: {
    fontSize: 14,
    color: Colors.purple,
    padding: 8,
  },
});

export default ContactList;
