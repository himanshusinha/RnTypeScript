import {Text, View} from 'react-native';
import React, {Component} from 'react';
interface MyProps {
  name: string;
  email: string;
  age: number;
}
interface MyState {
  counterL: number;
}
export default class ClassComp extends Component<MyProps, MyState> {
  render() {
    return (
      <View>
        <Text>
          {this.props.name + ' ' + this.props.email + ' ' + this.props.age}
        </Text>
      </View>
    );
  }
}
