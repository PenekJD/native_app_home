import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/Styles';

function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>main</Text>
    </View>
  );
}

export {MainScreen};