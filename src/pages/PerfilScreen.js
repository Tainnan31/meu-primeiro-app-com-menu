import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text>Informações do usuário</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PerfilScreen;
