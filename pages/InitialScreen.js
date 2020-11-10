import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

const InitalScreen = (props) => {
  const navigation = useNavigation();

  function handleStartAplication() {
    navigation.navigate('ContactsListScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Text style={styles.title}>Sua agenda de Contatos</Text>
      </View>
      <View style={styles.buttonContainer}>
        <RectButton style={styles.start} onPress={handleStartAplication}>
          <Feather name="arrow-right" size={20} color={Colors.purple} />
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.purple,

    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    height: 240,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: 70,
    height: 70,
    backgroundColor: Colors.yellow,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InitalScreen;
