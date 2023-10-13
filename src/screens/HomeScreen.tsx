import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'HomeScreen'>;
}
const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <TouchableOpacity
      style={{borderWidth: 1, borderColor: 'black', padding: 10}}
      onPress={() => {
        navigation.navigate('SettingsScreen', {
          name: 'himanshusinha',
          email: 'himanshusinha011@gmail.com',
        });
      }}>
      <Text>Go to settingsScreen</Text>
    </TouchableOpacity>
  );
};
export default HomeScreen;
