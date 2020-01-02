import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DateMask from "./DateMask";

// import MaskedInputScreen from "./MaskedInputScreen";
// <MaskedInputScreen />

// import MaskExample from "./MaskExample";
// <MaskExample />

export default function App() {
  return (
    <View style={styles.container}>
      <DateMask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
