import {View, Text, Settings} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';

interface SettingsScreen {
  navigation: StackNavigationProp<RootStackParamsList, 'SettingsScreen'>;
}
const SettingsScreen = ({navigation}: SettingsScreen) => {
  const route = useRoute();
  const {name, email} = route.params as RouteParams;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

export default SettingsScreen;
