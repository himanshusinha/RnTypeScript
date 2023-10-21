import {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {Note, addNote, noteSelector} from '../redux/notesSlice';

const Notes: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const dispatch = useAppDispatch();
  const notes = useAppSelector(noteSelector);
  console.log(notes);
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
      <View style={{width: '90%', alignItems: 'center'}}>
        <TextInput
          value={title}
          onChangeText={txt => setTitle(txt)}
          style={{
            width: '90%',
            height: 40,
            borderWidth: 1,
            borderColor: 'grey',
            paddingStart: 10,
          }}
          placeholder="Enter Title"
        />
      </View>
      <View style={{marginTop: 20, width: '90%', alignItems: 'center'}}>
        <TextInput
          value={desc}
          onChangeText={txt => setDesc(txt)}
          style={{
            width: '90%',
            height: 40,
            borderWidth: 1,
            borderColor: 'grey',
            paddingStart: 10,
          }}
          placeholder="Enter Desc"
        />
      </View>
      <View
        style={{
          marginTop: 20,
          width: '90%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => dispatch(addNote({title, desc}))}
          style={{
            width: '90%',
            height: 40,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Add Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: '80%'}}>
        <FlatList
          data={notes}
          renderItem={({item}: {item: Note}) => {
            return (
              <View
                style={{
                  justifyContent: 'center', // Center vertically
                  borderWidth: 1,
                  borderColor: 'grey',
                  padding: 10,
                  marginVertical: 10,
                }}>
                <Text>{item.title}</Text>
                <Text>{item.desc}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Notes;
