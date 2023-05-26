import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, DeviceEventEmitter} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const [profilePicture, setProfilePicture] = useState<string | null>('');

  useEffect(() => {
    DeviceEventEmitter.addListener('event.pictureupdate', eventData =>
      updatePicture(eventData),
    );

    AsyncStorage.getItem('profilepicture').then(pic => setProfilePicture(pic));

    return () => {
      DeviceEventEmitter.removeAllListeners('event.pictureupdate');
    };
  }, []);

  const updatePicture = (newPicture: string) => {
    console.log({newPicture});

    if (newPicture) {
      setProfilePicture(newPicture);
      AsyncStorage.setItem('profilepicture', newPicture);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TakePicture');
        }}
        style={{padding: 16}}>
        {profilePicture ? (
          <Image
            source={{uri: 'data:image/png;base64,' + profilePicture}}
            resizeMode="contain"
            style={{height: 100, width: 100}}
          />
        ) : (
          <MatIcons name="account-circle" size={100} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
