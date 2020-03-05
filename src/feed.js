import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles/styles';

export default function Feed({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Navigation Drawer</Text>
      <Button 
        title="Go to Feed item"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}
