'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {sharedStyles} from './UI';
import {SmallBadge} from './badge';

export default class SchoolIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    scale: PropTypes.number,
    horizontal: PropTypes.bool,
    count: PropTypes.number,
    ...TouchableOpacity.propTypes
  };

  imageForName(name) {
    switch (name) {
      case "elementary schools":
      return require('./images/elementary_schools.png');
      case "middle schools":
      return require('./images/middle_schools.png');
      case "high schools":
      return require('./images/high_schools.png');
      default:
      return require('./images/nearby_schools.png');
    }
  }

  render() {
    let {style, name, count, ...otherProps} = this.props;
    let size = 71 * (this.props.scale || 1);
    let schoolSize = this.props.horizontal ? {height: size, marginVertical: 5, flexDirection: 'row'} : {width: size, marginHorizontal: 5, flex: 1};

    let backgroundColor = `rgba(21, 82, 147, ${size < 71 ? 0.5 : 1})`;
    let avatar = {width: size, height: size, borderRadius: size / 2, backgroundColor, overflow: 'visible'};
    let textSize = this.props.horizontal ? {marginLeft: 19} : {marginTop: 10};
    return (
      <TouchableOpacity style={[styles.school, schoolSize, style]} {...otherProps}>
        <Image style={avatar} source={this.imageForName(name)}>
          <SmallBadge number={count} />
        </Image>
        <Text style={[sharedStyles.shadowText, sharedStyles.boldText, styles.schoolCaption, textSize]}>{name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  school: {
    paddingTop: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  schoolCaption: {
    fontSize: 12,
    shadowOpacity: 0.13,
    letterSpacing: 0.86,
    lineHeight: 19,
  },
});