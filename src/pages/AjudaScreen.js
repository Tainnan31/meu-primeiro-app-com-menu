import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AjudaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajuda</Text>
      <Text style={styles.text}>
        Aqui você pode encontrar informações para solucionar problemas ou dúvidas sobre o aplicativo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
