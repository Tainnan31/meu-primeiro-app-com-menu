import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === 'admin@admin.com' && password === '123456') {
        navigation.navigate('Home');
      } else {
        alert('Usuário ou senha incorretos.');
      }
    }, 2000); 
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }}>
      {loading ? (
        <ActivityIndicator size="large" color="gray" />
      ) : (
        <>
          <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{
              width: '80%',
              padding: 15,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              backgroundColor: 'white',
            }}
          />
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
              width: '80%',
              padding: 15,
              marginVertical: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              backgroundColor: 'white',
            }}
          />
          <TouchableOpacity onPress={() => alert('Recupere sua senha')}>
            <Text style={{ color: 'blue', marginBottom: 20 }}>Esqueceu a senha? Clique aqui!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              width: '80%',
              padding: 15,
              backgroundColor: 'blue',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Entrar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default LoginScreen;
