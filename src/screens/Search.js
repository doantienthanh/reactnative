import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
import { Picker } from '@react-native-picker/picker';
import Service from '../components/Service';
import Sliders from '../components/Slider';
const Search = () => {
  const [element, setElement] = useState({
    contents: [
      {
        title: 'Title 1',
        body: 'Hi. I love this component. What do you think?',
      },
      {
        title: 'See this one too',
        body: 'Yes. You can have more items.',
      },
      {
        title: 'Thrid thing',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  });
  const [values, setValues] = useState(['Good', 'Very Good', 'Excellent']);
  return (
    <ScrollView style={styles.scrollViewSearch}>
      <View style={styles.bodySearch}>
        <View style={styles.placeSearch}>
          <Icon name="ic-pinmap2" style={styles.iconMarker} />
          <TextInput style={styles.txtPlace}>6 Leigh Place, West Pennant Hills...</TextInput>
          <Text style={styles.changePlace}>Change</Text>
        </View>
        <View style={styles.choseService}>
          <Text style={styles.txtChoseService}>Chose Service Types</Text>
        </View>
        <View style={styles.choseServiceitem}>
          <Service icon="ic-baby" title="Child Care Center" checkIcon={false} />
          <Service icon="ic-abc" title="Pre-school & Kindergarten" checkIcon={true} />
          <Service icon="ic-family" title="Family Day Care" checkIcon={false} />
          <Service icon="ic-apron" title="Before & After School Care" checkIcon={false} />
        </View>
        <Sliders icon="ic-kindi" title="KindiCare Rating" number1="8.0" number2="10.0" />
        <Sliders
          icon="ic-2pinmap"
          title="The shorted distance from home"
          number1="0 km"
          number2="50 km"
        />
        <View style={styles.ratingKinds}>
          <Icon name="ic-moneyflower" color="#DB147F" size={30} />
          <Text style={styles.txtRating}>Value For Money For The Area</Text>
        </View>
        <View style={styles.valueMoney}>
          {values.map((index) => (
            <TouchableOpacity style={styles.btnValues}>
              <Text style={styles.txtValue}>{index}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Sliders icon="ic-kindi" title="Cost Per Day" number1="$55" number2="$127" />
        <View style={styles.national}>
          <Icon name="ic-kindi" color="#DB147F" size={30} />
          <Text style={styles.txtRating}>National Quality Standard Rating</Text>
        </View>
        <View style={styles.picker}>
          <Picker
            selectedValue={element}
            style={styles.pikerItem}
            onValueChange={(itemValue, itemIndex) => setElement({ itemValue })}
          >
            <Picker.Item label="Exceeding or Excellent NQS" value="Exceeding or Excellent NQS" />
            <Picker.Item label="Meeting NQS" value="Meeting NQS" />
            <Picker.Item label="Working Towards NQS" value="Working Towards NQS" />
            <Picker.Item
              label="Significant Improvement Required"
              value="Significant Improvement Required"
            />
            <Picker.Item
              label="Not Rated or Provisional Rating"
              value="Not Rated or Provisional Rating"
            />
          </Picker>
        </View>
        <View style={styles.national}>
          <Icon name="ic-cost" color="#DB147F" size={30} />
          <Text style={styles.txtRating}>Sort by result</Text>
        </View>
        <View style={styles.picker}>
          <Picker
            selectedValue={element}
            style={styles.pikerItem}
            onValueChange={(itemValue, itemIndex) => setElement({ itemValue })}
          >
            <Picker.Item label="Exceeding or Excellent NQS" value="Exceeding or Excellent NQS" />
            <Picker.Item label="Meeting NQS" value="Meeting NQS" />
            <Picker.Item label="Working Towards NQS" value="Working Towards NQS" />
            <Picker.Item
              label="Significant Improvement Required"
              value="Significant Improvement Required"
            />
            <Picker.Item
              label="Not Rated or Provisional Rating"
              value="Not Rated or Provisional Rating"
            />
          </Picker>
        </View>
        <View>
          <TouchableOpacity style={styles.btnBottom}>
            <Text style={styles.txtBtnBottom}>Find Childcare</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  placeSearch: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  iconMarker: {
    fontSize: 30,
    marginLeft: 8.17,
    marginTop: 5.46,
  },
  txtPlace: {
    fontFamily: 'SF Pro Text',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 23,
    width: 254,
    left: 20,
  },
  changePlace: {
    lineHeight: 23,
    marginTop: 15,
    fontWeight: '700',
    fontSize: 10,
    color: '#DB147F',
    marginLeft: 5,
  },
  choseService: {
    marginTop: 26,
    left: 20,
  },
  txtChoseService: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '700',
    color: '#2D1F21',
  },
  choseServiceitem: {
    marginTop: 25,
    flexDirection: 'row',
  },
  txtChoseServices: {
    marginTop: 11,
    width: 58,
    height: 30,
  },
  ratingKind: {
    marginTop: 63,
    marginLeft: 28.23,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingKinds: {
    marginTop: 23,
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
  valueMoney: {
    flexDirection: 'row',
    marginTop: 30,
  },
  btnValues: {
    width: 91,
    height: 34,
    borderWidth: 1,
    borderColor: '#DB147F',
    marginLeft: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtValue: {
    fontSize: 14,
    fontWeight: '400',
  },
  costPerday: {
    marginTop: 31.3,
    flexDirection: 'row',
    marginLeft: 20,
  },
  national: {
    marginTop: 28,
    flexDirection: 'row',
    marginLeft: 20,
  },
  pikerItem: {
    width: 320,
    marginLeft: 20,
  },
  btnBottom: {
    width: 343,
    height: 48,
    backgroundColor: '#DB147F',
    borderRadius: 4,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  txtBtnBottom: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
export default Search;
