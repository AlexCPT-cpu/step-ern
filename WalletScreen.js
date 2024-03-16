import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { primary, secondry } from '../constants';

const DiagnosticAIScreen = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { id: Date.now(), text: userInput, sender: 'user' }]);
      // Here, you would typically send the userInput to your AI service and wait for a response
      // For demonstration, we're just echoing the userInput back as the "AI response"
      setMessages(prev => [...prev, { id: Date.now() + 1, text: `AI Response to "${userInput}"`, sender: 'ai' }]);
      setUserInput('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.text}>DIAGNOSTIC AI</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.chatContainer}>
        {messages.map(message => (
          <View key={message.id} style={[styles.message, message.sender === 'ai' ? styles.aiMessage : styles.userMessage]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your symptoms..."
          placeholderTextColor="#a1a1aa"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <FontAwesome name="send" size={24} color={primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
  },
  main: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    marginHorizontal: 'auto',
    marginLeft: 70,
    backgroundColor: primary,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 40,
  },
  text: {
    color: '#a1a1aa',
  },
  chatContainer: {
    flex: 1,
    marginTop: 20,
  },
  message: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '70%',
    alignSelf: 'flex-start',
  },
  aiMessage: {
    backgroundColor: secondry,
    marginLeft: 10,
  },
  userMessage: {
    backgroundColor: primary,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#111',
  },
  input: {
    flex: 1,
    color: 'white',
    padding: 10,
    marginRight: 10,
    backgroundColor: '#222',
    borderRadius: 20,
  },
  // Add additional styles as needed
});

export default DiagnosticAIScreen;

