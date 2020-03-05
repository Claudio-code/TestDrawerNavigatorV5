import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles/styles';


export default function detail({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Detail Drawer</Text>
      <Button 
        title="Go to TopTab item"
        onPress={() => navigation.navigate('TopTab')}
      />
      <Button 
        title="Go to BottomTab item"
        onPress={() => navigation.navigate('BottomTab')}
      />
    </View>
  );
}
