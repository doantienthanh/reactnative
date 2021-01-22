import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Colors } from '../theme/Colors';
import Search from './Search';
import Application from './Application';
const Home = (props) => {
  return (
    <View style={styles.bodyHome}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.btnSearch}
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'searchFilters',
            },
          })
        }
      >
        <Text>Search filer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSearch}
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'application',
            },
          })
        }
      >
        <Text>Application</Text>
      </TouchableOpacity>
    </View>
  );
};
Navigation.registerComponent('application', () => Application);
Navigation.registerComponent('searchFilters', () => Search);
Search.options = {
  topBar: {
    title: {
      text: 'Search Filters',
      color: Colors.black,
    },
  },
};
Application.options = {
  topBar: {
    title: {
      text: 'Application',
      color: Colors.black,
    },
  },
};
const styles = StyleSheet.create({
  bodyHome: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSearch: {
    width: '60%',
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.aqua,
  },
});
export default Home;
