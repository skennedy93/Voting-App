import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PollScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is where you will find polling place info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
    },
  });

export default PollScreen;