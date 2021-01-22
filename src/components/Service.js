import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/kindicare';
const Service = (props) => {
  return (
    <View style={styles.itemService}>
      <TouchableOpacity style={props.checkIcon ? styles.btnChoseServices : styles.btnChoseService}>
        {props.checkIcon ? (
          <Icon name={props.icon} size={30} color="#ff00ff" />
        ) : (
          <Icon name={props.icon} style={styles.iconChoseService} />
        )}
      </TouchableOpacity>
      <Text style={props.checkIcon ? styles.txtNameServices : styles.txtNameService}>
        {props.title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  itemService: {
    width: '25%',
    alignItems: 'center',
  },
  btnChoseService: {
    height: 52,
    width: 52,
    borderWidth: 1,
    borderColor: '#ABA7A7',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconChoseService: {
    fontSize: 30,
    color: '#ABA7A7',
  },
  txtNameService: {
    textAlign: 'center',
    marginTop: 11,
    fontSize: 12,
    fontWeight: '400',
    color: '#ABA7A7',
  },
  btnChoseServices: {
    height: 52,
    width: 52,
    borderWidth: 1,
    borderColor: '#DB147F',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNameServices: {
    textAlign: 'center',
    marginTop: 11,
    fontSize: 12,
    fontWeight: '400',
    color: '#DB147F',
  },
});

export default Service;
