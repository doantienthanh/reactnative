import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
import Date from '../components/Date';
import Info from '../components/Info';
const Application = () => {
  return (
    <ScrollView>
      <View style={styles.bodyApp}>
        <View style={styles.headerApp}>
          <Text style={styles.titleApp}>Children Information</Text>
          <Text style={styles.txtAppTitle}>
            You can choose which children want to apply by clicking on their name and editing the
            information by clicking on the pen icon
          </Text>
        </View>
        <View style={styles.centerApp}>
          <Info icon="ic-boy" />
          <View style={styles.contentCenter}>
            <Text style={styles.dateRequire}> Day care require:</Text>
            <View style={styles.btnDateTime}>
              <Date title="Mon" checkDate={true} />
              <Date title="Tue" checkDate={false} />
              <Date title="Wed" checkDate={true} />
              <Date title="Thu" checkDate={false} />
              <Date title="Fri" checkDate={true} />
              <Date title="Sat" checkDate={false} />
              <Date title="Sun" checkDate={false} />
            </View>
            <Text style={styles.dateRequire}>Service:</Text>
            <TouchableOpacity style={styles.btnFamily}>
              <Text style={styles.txtBtnFamily}>Family Day Care</Text>
              <Text style={styles.txtBtnFamilies}>$110</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFamilies}>
              <Text style={styles.txtBtnFamilys}>Child Care Centre</Text>
              <Text style={styles.txtBtnFamiliess}>$140</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFamilies}>
              <Text style={styles.txtBtnFamilys}>Pre-school & Kindergarten</Text>
              <Text style={styles.txtBtnFamiliesss}>$270</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFamilies}>
              <Text style={styles.txtBtnFamilys}>Before and After School Care</Text>
              <Text style={styles.txtBtnFamiliessss}>$299</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomApp}>
          <Info icon="ic-girl" />
        </View>
        <Text style={styles.txtAddNew}>+ Add New Child</Text>
        <TouchableOpacity style={styles.btnBottom}>
          <Text style={styles.txtBtnBottom}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bodyApp: {
    width: '100%',
  },
  titleApp: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 24,
    left: 16,
  },
  txtAppTitle: {
    left: 16,
    fontSize: 12,
    fontWeight: '400',
    width: 340,
  },
  centerApp: {
    marginTop: 24,
    left: 16,
    borderWidth: 1,
    borderColor: '#DB147F',
    width: 330,
    height: 380,
  },
  dateRequire: {
    marginTop: 10,
    fontSize: 14,
    marginLeft: 14,
    fontWeight: '400',
    color: '#857E7F',
  },
  btnDateTime: {
    flexDirection: 'row',
    marginTop: 8,
  },
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
  btnFamily: {
    width: 313,
    height: 32,
    backgroundColor: '#DB147F',
    marginLeft: 10,
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
  },
  txtBtnFamily: {
    fontSize: 14,
    color: 'white',
    marginLeft: 10,
  },
  txtBtnFamilies: {
    fontSize: 14,
    color: 'white',
    marginLeft: 160,
  },
  txtBtnFamilys: {
    fontSize: 14,
    marginLeft: 10,
  },
  txtBtnFamiliess: {
    fontSize: 14,
    marginLeft: 160,
  },
  txtBtnFamiliesss: {
    fontSize: 14,
    marginLeft: 100,
  },
  txtBtnFamiliessss: {
    fontSize: 14,
    marginLeft: 85,
  },
  btnFamilies: {
    width: 313,
    height: 32,
    marginLeft: 10,
    marginTop: 12,
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
  },
  bottomApp: {
    marginTop: 24,
    left: 16,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: 330,
    height: 122,
  },
  txtAddNew: {
    marginLeft: 16,
    marginTop: 30,
    color: '#DB147F',
    textDecorationLine: 'underline',
  },
  btnBottom: {
    width: 340,
    height: 48,
    backgroundColor: '#DB147F',
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 11,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnBottom: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
});
export default Application;
