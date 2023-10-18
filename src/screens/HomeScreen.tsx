import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useReducer, useRef, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'HomeScreen'>;
}
interface User {
  name: string;
  email: string;
  age: number;
}
interface Items {
  name: string;
  email: string;
  age: number;
}
const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({name: '', email: '', age: 0});
  const [items, setItems] = useState<Items[]>([]);
  const [details, setDetails] = useState<null>(null);
  const ref = useRef<TextInput>(null);

  type MyState = {
    count: number;
  };
  const initialState: MyState = {
    count: 0,
  };
  type Action = {
    type: 'INCREMENT' | 'DECREMENT';
  };
  const reducer = (state: MyState, action: Action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, count: state.count + 1};
      case 'DECREMENT':
        return {...state, count: state.count - 1};
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => dispatch({type: 'INCREMENT'})}
        style={{
          width: '40%',
          height: 50,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <Text style={{marginVertical: 20}}>{state.count}</Text>
      <TouchableOpacity
        onPress={() => dispatch({type: 'DECREMENT'})}
        style={{
          width: '40%',
          height: 50,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
