import { View, Text,StyleSheet,TouchableOpacity,DeviceEventEmitter } from 'react-native'
import { useRef,useEffect,useState } from 'react'
import React from 'react'
import { RNCamera } from 'react-native-camera'
import RNFS from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';


const TakePicture = () => {
    const navigation = useNavigation();
    const camera = useRef<RNCamera>(null);

    const takePicture = async () => {
        if(camera){
            const options = {quality: 0.5,base64: true};
            const data = await camera.current?.takePictureAsync(options);
            console.log('data',data?.uri);
            if(data){
                RNFS.readFile(data.uri,'base64').then(res=>{
                    console.log({res});
                    DeviceEventEmitter.emit('event.updatePicture',res);
                    navigation.goBack();
                })
            }
        }
    }

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default TakePicture;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
  