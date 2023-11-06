import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import CommanTextInput from '../components/CommanTextInput';

const Component = () => {
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [badName, setBadName] = useState<boolean>(false);
  const [badMobile, setBadMobile] = useState<boolean>(false);

  const validation = () => {
    let valid = true;
    if (name == '') {
      valid = false;
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (mobile == '') {
      valid = false;
      setBadMobile(true);
    } else if (mobile.length < 10) {
      valid = false;
      setBadMobile(true);
    } else {
      setBadMobile(false);
    }

    if (valid) {
      if (name !== '' && mobile !== '') {
        Alert.alert('Call Api ');
      }
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '90%'}}>
        <CommanTextInput
          value={!badName}
          placeholder="Enter name"
          onChangeText={e => setName(e)}
          keyboardType="default"
          maxLength={30}
          disabled={false}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {badName && <Text style={{color: 'red'}}>Please enter name</Text>}
      </View>
      <View style={{width: '90%', marginVertical: 20}}>
        <CommanTextInput
          value={!badMobile}
          placeholder="Enter mobile"
          onChangeText={e => setMobile(e)}
          keyboardType="numeric"
          maxLength={30}
          disabled={false}
        />
        {badMobile && (
          <Text style={{color: 'red'}}>Please enter 10 digit mobile</Text>
        )}
      </View>
      <View style={{width: '90%', marginVertical: 20}}>
        <TouchableOpacity
          onPress={() => validation()}
          style={{
            height: 50,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component;
