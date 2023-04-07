import { View, Text, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
const CustomTitleBar = ({navigation}:any) => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={{
          uri: "https://khi.nu.edu.pk/wp-content/uploads/2022/05/FAST-NU-logo.png",
        }}
        resizeMode="contain"
        style={{ width: 140, height: 40 }}
      />
      {/* <Text>{route.name}</Text> */}
      <MaterialIcons name="person" size={24} onPress={()=>navigation.navigate("Profile")}/>
    </View>
  );
};

export default CustomTitleBar;
