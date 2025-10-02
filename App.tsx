import { useState,useRef } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Image, Animated } from 'react-native';

export default function App() {


  const emailAnim = useRef (new Animated.Value(1)).current;
  const passwordAnim = useRef (new Animated.Value(1)).current;
  const buttonAnim = useRef (new Animated.Value(1)).current;  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
   Animated.parallel([
    Animated.sequence([
      Animated.timing(emailAnim, {
        toValue: 0.5,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(emailAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]),
    Animated.timing(buttonAnim, {
      toValue: 1.5,
      duration: 2000,
      useNativeDriver: true,
    }),
    Animated.timing(buttonAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }),
  ]).start();
  Animated.sequence([
    Animated.timing(passwordAnim, {
      toValue: 1, 
      duration: 2000,
      useNativeDriver: true,
    }),
    Animated.timing(passwordAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }),
  ]).start();
  const handlePress = () => {
    Alert.alert("Email Entered", email);
  };


  return (
    <View style={styles.container}>
    <View style={styles.mainPicture}>
      <Image source={require('./ICeTASK2/ICeTASK2/assets/boots-ennis-lands-wba-super-welterweight-final-eliminator-against-lima-in-philadelphia-on-oct-11-live-on-dazn.html')}  />
    </View>

    <Animated.View style={{ opacity: emailAnim }}>
  <TextInput 
  style={styles.input}
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
/>
</Animated.View>

<Animated.View style={{ opacity: passwordAnim }}>
<TextInput 
  style={styles.input}
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
/>
</Animated.View>

<Animated.View style={{ transform: [{ scale: buttonAnim }] }}>
  <Button title="Submit"  />
</Animated.View>
    </View>
) };


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

  mainPicture: {
    marginBottom: 30,
  },
  ImageSize: {
    width: 200,
    height: 200,
  },
   
});
