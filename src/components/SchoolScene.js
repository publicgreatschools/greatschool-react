'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {Sections} from './section';
import {SchoolCell} from './NearbySchools';
import SchoolNameView from './school_overview_icon';
//
export default class SchoolScene extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.slideImage} resizeMode={"contain"} source={require('./images/shutterstock3.jpg')} />
      <SchoolNameView name={"College Park High School"} icon={require('./images/school_icon.png')} />
      <Sections style={{flex: 1}}>
      <ScrollView>
      <View style={{height: 20}} />
      </ScrollView>
      </Sections>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
  },
  slideImage: {
    height: 219,
    left: 0,
    right: 0,
    top: 0,
  },
  overviewIcon: {

  },
});
