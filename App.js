import React from 'react';
import ContactsNavigator from './navigation/ContactsNavigator';
import ENV from './env';
import * as firebase from 'firebase';
import 'firebase/firestore';

if (!firebase.apps.length) firebase.initializeApp(ENV);

export const db = firebase.firestore();

export default function App() {
  return <ContactsNavigator />;
}
