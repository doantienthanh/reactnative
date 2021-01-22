import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
import Slider from 'react-native-slider';

const Sliders = (props) => {
  return (
    <View>
      <View style={styles.ratingKind}>
        <Icon name={props.icon} color="#DB147F" size={30} />
        <Text style={styles.txtRating}>{props.title}</Text>
      </View>
      <View style={styles.numberSearchFilers}>
        <Text style={styles.txtNumberSearchFilers8}>{props.number1}</Text>
        <Text style={styles.txtNumberSearchFilers10}>{props.number2}</Text>
      </View>
      <View style={styles.sliler}>
        <Slider
          style={styles.sliderRow1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#DB147F"
          minimumValue={0}
          maximumValue={1}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ratingKind: {
    marginTop: 63,
    marginLeft: 28.23,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtRating: {
    marginLeft: 14.8,
    fontSize: 16,
    fontWeight: '700',
  },
  numberSearchFilers: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 13.62,
  },
  txtNumberSearchFilers8: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: '600',
  },
  txtNumberSearchFilers10: {
    textAlign: 'right',
    marginLeft: '70%',
    fontWeight: '600',
    fontSize: 14,
  },
  sliler: {
    width: '100%',
  },
  sliderRow1: {
    width: '80%',
    height: 25,
    marginLeft: '6%',
    color: '#DB147F',
  },
});
export default Sliders;
