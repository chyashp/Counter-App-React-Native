import { StatusBar } from "expo-status-bar";
import MainScreen from "./screens/MainScreen";
import { useState, useEffect } from "react";
import { Modal, View, TextInput, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';

export default function App() {
  const [count, setCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goalNumber, setGoalNumber] = useState('');
  const [activeGoal, setActiveGoal] = useState(null);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [sound, setSound] = useState();
  const [sets, setSets] = useState(0);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/mixkit-achievement-bell-600.wav')  // You'll need to add a sound file
    );
    setSound(sound);
    await sound.playAsync();
  }

  const handleSetGoal = () => {
    const numberGoal = parseInt(goalNumber);
    if (!isNaN(numberGoal)) {
      setActiveGoal(numberGoal);
      setCount(0);
      setSets(0);
    }
    setIsModalVisible(false);
    setGoalNumber('');
  };

  const handleIncrement = async () => {
    const newCount = count + 1;
    setCount(newCount);
    
    if (activeGoal !== null && newCount === activeGoal) {
      if (vibrationEnabled) {
        Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success
        );
      }
      if (soundEnabled) {
        await playSound();
      }
      setSets(prevSets => prevSets + 1);
      setCount(0);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <MainScreen 
        counter={count}
        goalNumber={activeGoal}
        onIncrement={handleIncrement}
        onDecrement={() => setCount(count - 1)}
        onReset={() => {
          setCount(0); 
          setSets(0);
        }}
        onSetGoal={() => setIsModalVisible(true)}
        sets={sets}
      />
      
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Set Your Goal</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your goal number"
              placeholderTextColor="#9e9e9e"
              keyboardType="number-pad"
              value={goalNumber}
              onChangeText={setGoalNumber}
              maxLength={4}
              returnKeyType="done"
              keyboardAppearance="dark"
            />
            
            <View style={styles.settingsWrapper}>
              <View style={styles.settingContainer}>
                <Text style={styles.settingText}>Vibration</Text>
                <Switch
                  value={vibrationEnabled}
                  onValueChange={setVibrationEnabled}
                  trackColor={{ false: '#767577', true: '#9370db' }}
                  thumbColor={vibrationEnabled ? '#f8f8ff' : '#f4f3f4'}
                />
              </View>

              <View style={styles.settingContainer}>
                <Text style={styles.settingText}>Sound</Text>
                <Switch
                  value={soundEnabled}
                  onValueChange={setSoundEnabled}
                  trackColor={{ false: '#767577', true: '#9370db' }}
                  thumbColor={soundEnabled ? '#f8f8ff' : '#f4f3f4'}
                />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.button, styles.cancelButton]}
                onPress={() => {
                  setIsModalVisible(false);
                  setGoalNumber('');
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, styles.confirmButton]}
                onPress={handleSetGoal}
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#2a2a2a',
    padding: 25,
    borderRadius: 15,
    width: '70%',
    borderWidth: 1,
    borderColor: '#9370db',
    shadowColor: '#9370db',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffebcd',
  },
  input: {
    borderWidth: 1,
    borderColor: '#9370db',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 18,
    backgroundColor: '#3a3a3a',
    color: '#f8f8ff',
    textAlign: 'center',
    placeholderTextColor: '#9e9e9e',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f08080',
    opacity: 0.85,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  confirmButton: {
    backgroundColor: '#9370db',
    opacity: 0.85,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonText: {
    color: '#f8f8ff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  settingsWrapper: {
    backgroundColor: '#363636',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  settingText: {
    color: '#f8f8ff',
    fontSize: 16,
    fontWeight: '500',
  },
});
