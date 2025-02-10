import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../UI/CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform } from "react-native";

const MainScreen = ({
  counter,
  onIncrement,
  onDecrement,
  onReset,
  onSetGoal,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <CustomButton
        label="-"
        onPress={onDecrement}
        style={[styles.button, styles.decrementButton]}
        textStyle={styles.decrementText}
      />
      <CustomButton
        label="+"
        onPress={onIncrement}
        style={[styles.button, styles.incrementButton]}
        textStyle={styles.incrementText}
      />
      <View style={styles.resetButtonContainer}>
        <CustomButton
          label="Reset"
          onPress={onReset}
          style={[styles.button, styles.resetButton]}
          textStyle={styles.resetText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  counter: {
    fontSize: 90,
    fontWeight: "bold",
    color: "#f8f8ff",
    marginBottom: 20,
  },
  button: {
    width: "85%",
    paddingVertical: 30,
    margin: 10,
    borderRadius: Platform.OS === "ios" ? 60 : 80,
  },
  incrementButton: {
    backgroundColor: "#87ceeb",
    flex: 2,
  },
  decrementButton: {
    width: Platform.OS === "ios" ? 230 : 300,
    height: Platform.OS === "ios" ? 80 : 100,
    backgroundColor: "#ffb6c1",
    flex: 1,
  },
  resetButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 10,
    alignSelf: "center",
    width: "60%",
    bottom: 20,
  },
  resetButton: {
    backgroundColor: "#9370db",
    width: "80%",
    paddingVertical: 20,
    // borderRadius: 50,
  },
  setGoalButton: {
    backgroundColor: "#da70d6",
    width: "80%",
    paddingVertical: 20,
  },
  resetText: {
    fontSize: 25,
    color: "#fff",
  },
  incrementText: {
    fontSize: 100,
    color: "#fff",
  },
  decrementText: {
    fontSize: 100,
    color: "#FFF",
  },
});

export default MainScreen;
