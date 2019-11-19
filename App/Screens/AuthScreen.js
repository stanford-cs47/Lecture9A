import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
        
    };
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  