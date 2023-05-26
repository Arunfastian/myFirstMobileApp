import {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

const CitiesList = ({route, navigation}: any) => {
  const [cites, setCities] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const {countryId, countryName} = route.params;

    navigation.setOptions({headerTitle: `Cities of ${countryName}`});

    fetch(`https://api.eatachi.co/api/City/ByCountry/${countryId}`)
      .then(response => {
        return response.json();
      })
      .then(newCities => {
        setCities(newCities);
      })
      .catch(err => Alert.alert('Error', err))
      .finally(() => setLoading(false));
  }, []);

  const displayCity = ({item}: any) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            padding: 8,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {item.Name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={cites} renderItem={displayCity} />
      )}
    </View>
  );
};

export default CitiesList;
