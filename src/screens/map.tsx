import React from "react";
import { StyleSheet, Text, View, Platform, PermissionsAndroid } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useState,useEffect} from 'react';


export default function Map() {
  let watchID: any;

  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [locationStatus, setLocationStatus] = useState('');
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
              buttonPositive: 'Yes',
              buttonNegative: 'No',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    requestLocationPermission();

    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');
        console.log(position);

        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsUserLocation={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <Marker
          coordinate={{latitude: currentLatitude, longitude: currentLongitude}}
          title={'City Campus'}
          description={'City Campus'}
        />
        </MapView>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
