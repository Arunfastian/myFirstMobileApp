import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CountriesList = ({navigation}: any) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://api.eatachi.co/api/country')
      .then(response => {
        return response.json();
      })
      .then(newCountries => {
        setCountries(newCountries);
      })
      .catch(err => Alert.alert('Error', err))
      .finally(() => setLoading(false));
  }, []);
  const displayCountry = (itemObject: any) => {
    const {index, item} = itemObject;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Cities', {
            countryId: item.CountryId,
            countryName: item.Name,
          })
        }>
        <View
          style={{
            backgroundColor: index % 2 === 0 ? 'white' : 'lightblue',
            height: 60,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderBottomColor: 'black',
            borderTopColor: 'black',
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {item.Name}
          </Text>
          <Text
            style={{
              color: 'black',
            }}>
            {item.CurrencyName}
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
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30,color: 'black'}}>
            Countries Of the World
          </Text>
          <FlatList data={countries} renderItem={displayCountry} />
        </View>
      )}
    </View>
  );
};

export default CountriesList;
