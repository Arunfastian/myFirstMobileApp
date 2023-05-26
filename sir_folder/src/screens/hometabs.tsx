import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MatIcons from 'react-native-vector-icons/MaterialIcons';

import CountriesList from './countries';
import Settings from './settings';
import Profile from '../profile/profile';
import Tab4 from './contexttab';
import ContextTab from './contexttab';
import Map from './map';
import GMap from './map';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();

const MyHeader = ({navigation, route, options}: any) => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={{
          uri: 'https://khi.nu.edu.pk/wp-content/uploads/2022/05/FAST-NU-logo.png',
        }}
        resizeMode="contain"
        style={{width: 140, height: 40}}
      />
      {/* <Text>{route.name}</Text> */}
      <MatIcons name="menu" size={24} />
    </View>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: (props: any) => {
          return <MyHeader {...props} />;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={CountriesList}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <MatIcons
                name="home"
                size={24}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <MatIcons
                name="settings"
                size={24}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <MatIcons
                name="account-circle"
                size={24}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Screen 2" component={ContextTab} />
      <Tab.Screen
        name="Map"
        component={GMap}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <MatIcons
                name="explore"
                size={24}
                color={tabInfo.focused ? '#006600' : '#8e8e93'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
