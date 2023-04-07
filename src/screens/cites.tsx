import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";

const CitiesList = ({ route }: any) => {
  const [cites, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const { countryId } = route.params;
    setLoading(true);
    fetch(`https://api.eatachi.co/api/City/ByCountry/${countryId}`)
      .then((response) => {
        return response.json();
      })
      .then((newCities) => {
        setCities(newCities);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const displayCity = ({ item }: any) => {
    return (
      <View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            padding: 8,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {item.Name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" />}
      {!loading && !cites.length && (
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          No Cities Found
        </Text>
      )}
      <FlatList data={cites} renderItem={displayCity} />
    </View>
  );
};

export default CitiesList;
