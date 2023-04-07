import { useState } from "react";
import { Alert, Button, Switch, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Settings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [inFinalYear, setFinalYear] = useState(false);

  const handleSave = () => {
    Alert.alert("Confirm", "Are You Sure You Want to Save?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () => {
          console.log({ firstName, lastName, inFinalYear });
        },
      },
    ]);
  };
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <TextInput
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={(newText) => setFirstName(newText)}
      />
      <TextInput
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={(newText) => setLastName(newText)}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>In Final Year</Text>
        <Switch
          value={inFinalYear}
          onChange={() => {
            setFinalYear(!inFinalYear);
          }}
        />
      </View>
      <View style={{ padding: 12, borderRadius: 10 }}>
        <Button title="Save" onPress={handleSave} color={"#10BAD5"} />
      </View>
    </View>
  );
};

export default Settings;
