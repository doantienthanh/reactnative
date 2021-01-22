import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
const Date = (props) => {
  return (
    <TouchableOpacity style={props.checkDate ? styles.btnItemDates : styles.btnItemDate}>
      <Text style={props.checkDate ? styles.txtBtnTimes : styles.txtBtnTime}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnItemDate: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#DB147F',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  txtBtnTime: {
    fontSize: 12,
    fontWeight: '600',
  },
  btnItemDates: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#DB147F',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    backgroundColor: '#DB147F',
  },
  txtBtnTimes: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  
});
export default Date;
