`use strict`;
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
} from 'react-native';

import GuideNavigator from './app/component/GuideNavigator'

class ReactNative_intelliSchool extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			/*<TabBar/>*/
			<GuideNavigator/>
		);
	}
}

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);
