import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../UI/CustomButton";

const MainScreen = ({
  counter,
  goalNumber,
  onIncrement,
  onDecrement,
  onReset,
  onSetGoal,
  sets,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.setsCounter}>{sets}</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counter}>{counter}</Text>
        {goalNumber !== null && (
          <Text style={styles.goalNumber}>/{goalNumber}</Text>
        )}
      </View>
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
        <CustomButton
          label="Set Goal"
          onPress={onSetGoal}
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
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  counter: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#f8f8ff",
  },
  goalNumber: {
    fontSize: 20,
    color: "#ffebcd",
    marginLeft: 5,
  },
  button: {
    width: "85%",
    paddingVertical: 30,
    margin: 10,
    borderRadius: 60,
  },
  incrementButton: {
    backgroundColor: "#87ceeb",
    flex: 1.5,
  },
  decrementButton: {
    width: 230,
    height: 200,
    backgroundColor: "#ffb6c1",
    // flex: 1,
  },
  resetButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: 10,
    alignSelf: "center",
    width: "90%",
    bottom: 20,
  },
  resetButton: {
    backgroundColor: "#9370db",
    width: "45%",
    paddingVertical: 20,
    borderRadius: 50,
    color: "#fff",
    paddingVertical: 10,
  },
  resetText: {
    color: "#fff",
    fontSize: 25,
  },
  incrementText: {
    fontSize: 100,
    color: "#fff",
  },
  decrementText: {
    fontSize: 100,
    color: "#FFF",
  },
  setsCounter: {
    position: 'absolute',
    top: 80,
    right: 30,
    fontSize: 24,
    fontWeight: '500',
    color: '#ffdead',
  },
});

export default MainScreen;
