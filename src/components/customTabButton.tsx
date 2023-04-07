import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TouchableOpacity } from "react-native";

const CustomTabButton = (props: any) => {
  const { children, onPress, accessibilityState } = props;
  console.log(props);
  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.activeTabStyles}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={styles.inactiveTabStyles}>
        {children}
      </TouchableOpacity>
    );
  }
};

export default CustomTabButton;

const styles = StyleSheet.create({
  activeTabStyles: {
    flex: 1,
    position: "absolute",
    width: 50,
    height: 50,
    padding: 8,
    top: -20,
    borderRadius: 50 / 2,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  inactiveTabStyles: {
    flex: 1,
    backgroundColor: "transparent",
  },
  btnWrapper: {
    flex: 1,
    alignItems: 'center'
  },
});
