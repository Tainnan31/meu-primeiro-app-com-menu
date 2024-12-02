import React from 'react';
import { View, Text, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ padding: 20 }}>
        <Text>Dark Mode</Text>
        <Switch 
          value={darkMode} 
          onValueChange={(value) => setDarkMode(value)} 
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
