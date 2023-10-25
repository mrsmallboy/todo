import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from './firebaseconfig';
class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  handleSignup = () => {
    // Implement your signup logic here, e.g., send data to an API
    // For this example, we'll just display the entered data
    alert(`Email: ${this.state.email}, Password: ${this.state.password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Signup</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
        />
        <Button
          title="Signup"
          onPress={this.handleSignup}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default SignupScreen;
