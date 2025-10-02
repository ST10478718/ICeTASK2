import { useState } from 'react';
import { StyleSheet, TextInput, View, Alert, Button } from 'react-native';

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    Alert.alert("Email Entered", email);
  };
  return (
    <View style={styles.container}>
  <TextInput 
  style={styles.input}
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
/>
<TextInput 
  style={styles.input}
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
/>
  <Button title="Submit" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  emailText: {
    fontSize: 18,
    marginTop: 20,
    color: 'purple',
  },

  passwordText: {
    fontSize: 18,
    marginTop: 20,
    color: 'purple',
  },
});
