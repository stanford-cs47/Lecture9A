import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDOvJT5eSqFj8ieP6dX2xCb9APATX0pL3w",
  authDomain: "lecture-9a.firebaseapp.com",
  databaseURL: "https://lecture-9a.firebaseio.com",
  projectId: "lecture-9a",
  storageBucket: "lecture-9a.appspot.com",
  messagingSenderId: "753511253227",
  appId: "1:753511253227:web:cb17d1d0d64e6cc25aeaae",
  measurementId: "G-54GD36XTPS"
};

export default class UploadScreen extends React.Component {
  componentDidMount = () => {
    // firebase.initializeApp(firebaseConfig);
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Button title="Upload from camera" onPress={this.uploadFromCamera} />
        <Button title="Upload from library" onPress={this.uploadFromLibrary} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});