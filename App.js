import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

const url = '//localhost:3000/';

export default class App extends React.Component {

    state = {
        data:
            {
                name: '',
                background: '#FFFFFF',
                color: '#000000'
            }
    }

  componentDidMount =
    async() => {
      const response = await fetch( url + '?hour=' + moment().format( "HH" ) );
      const data = await response.json();
      this.setState({ data: data });
    }

  render() {
    return (
        <View style={styles.container}>
          <Text>{ this.state.data.name }</Text>
          <StatusBar style="auto" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
