import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export let screenWidth = width < height ? width : height
export let screenHeight = width < height ? height: width
