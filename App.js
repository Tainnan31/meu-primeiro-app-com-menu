import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './src/pages/LoginScreen';
import AjudaScreen from './src/pages/AjudaScreen';
import ConfiguracoesScreen from './src/pages/ConfiguraçõesScreen';
import PerfilScreen from './src/pages/PerfilScreen';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
<Drawer.Navigator>
    <Drawer.Screen name="Perfil" component={PerfilScreen} />
    <Drawer.Screen name="Configurações" component={ConfiguracoesScreen} />
    <Drawer.Screen name="Ajuda" component={AjudaScreen} />
</Drawer.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
