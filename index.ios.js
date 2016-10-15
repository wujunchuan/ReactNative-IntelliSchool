import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import  TabBar from './app/component/TabBar';

class ReactNative_intelliSchool extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabBar/>
		);
	}
}

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);
