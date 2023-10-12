import {Text, View} from 'react-native';
import React, {Component} from 'react';
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';

export default class TypeScriptComp extends Component {
  render() {
    return (
      <View style={{marginTop: 60}}>
        <ClassComp
          name={'Himanshu'}
          email={'himanshusinha011@gmail.com'}
          age={32}
        />
        <FunctionalComp
          name={'Dakshit'}
          email={'dakshit09@gmail.com'}
          age={4}
        />
      </View>
    );
  }
}
