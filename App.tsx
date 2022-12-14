
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/components/app-container';
import MyTabs from './src/'

export default function App() {
  
  return (
    <AppContainer>
      <MyTabs />
   </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
