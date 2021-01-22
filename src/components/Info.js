import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
const Info = (props) => {
  return (
    <View>
      <View style={styles.topCenter}>
        <Text style={styles.titleTopCenter}>Kathryn Murphy</Text>
        <Icon name={props.icon} style={styles.iconGender} color="#32A4FC" />
        <TouchableOpacity style={styles.btnTopCenter}>
          <Icon name="ic-pen" style={styles.iconPen} color="#DB147F" />
        </TouchableOpacity>
      </View>
      <Text style={styles.dateTime}>04-04-2018</Text>
      <View style={styles.allergie}>
        <Text style={styles.allergies}>Allergies: No</Text>
        <Text style={styles.textItemAllergies}>Special need: No</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  titleTopCenter: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 15,
  },
  iconGender: {
    fontSize: 20,
    marginLeft: 8.5,
  },
  btnTopCenter: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#DB147F',
    borderRadius: 25,
    left: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPen: {
    fontSize: 15,
  },
  dateTime: {
    fontSize: 14,
    marginLeft: 16,
    fontWeight: '400',
    color: '#857E7F',
  },
  allergie: {
    marginTop: 8,
    flexDirection: 'row',
  },
  allergies: {
    fontSize: 14,
    marginLeft: 16,
    fontWeight: '400',
    color: '#857E7F',
  },
  textItemAllergies: {
    fontSize: 14,
    fontWeight: '400',
    color: '#857E7F',
    marginLeft: 100,
  },
});

export default Info;
