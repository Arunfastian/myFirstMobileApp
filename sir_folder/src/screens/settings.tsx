import {useEffect, useState} from 'react';
import {Alert, Button, Switch, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppContext} from '../context/appcontext';

const Settings = () => {
  const {counter} = useAppContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [inFinalYear, setInFinalYear] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('settings').then(settingsStr => {
      if (settingsStr) {
        const settings = JSON.parse(settingsStr);

        setFirstName(settings.firstName);
        setLastName(settings.lastName);
        setInFinalYear(settings.inFinalYear);
      }
    });
  }, []);

  const saveData = () => {
    Alert.alert('Confirm', 'Are you sure you want to save?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          AsyncStorage.setItem(
            'settings',
            JSON.stringify({
              firstName,
              lastName,
              inFinalYear,
            }),
          );
        },
      },
    ]);
  };

  return (
    <View style={{padding: 16}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>
        Value of Counter: {counter}
      </Text>

      <TextInput
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={newText => setFirstName(newText)}
      />
      <TextInput
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={newText => setLastName(newText)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>In Final Year</Text>
        <Switch
          value={inFinalYear}
          onChange={() => setInFinalYear(!inFinalYear)}
        />
      </View>
      <Button title="Save" onPress={saveData} />
    </View>
  );
};

export default Settings;
