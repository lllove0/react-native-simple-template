import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import React, { Component } from 'react';
import digital from './custom/DS-Digital.json';
import physical from './custom/DS-Icon.json';

const iconMap = {
  fontAwesome: FontAwesome,
  ionicons: Ionicons,
  fontDigital: createIconSetFromIcoMoon(digital),
  fontPhysical: createIconSetFromIcoMoon(physical)
};

export class Icon extends Component {
  render() {
    const { name, size, color } = this.props;
    if (!name.includes('|')) {
      throw new Error('name 解析错误！');
    }
    let nameArr = name.split('|');
    let fontLib = nameArr[0];
    let font = nameArr[1];
    let CustomIcon = iconMap[fontLib];
    if (!CustomIcon) {
      throw new Error('没有找到匹配的font库，请review代码！');
    }
    return <CustomIcon name={font} size={size} color={color}/>;
  }
}
