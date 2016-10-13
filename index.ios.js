/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Navigator,
} from 'react-native';

export default class SimpleNavigationApp extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{title: 'My Initial Scene', index: 1}}
				renderScene={(route, navigator) =>
					<MyScene
						title={route.title}
						// Function to call when a new scene should be displayed
						onForward={ () => {
							const nextIndex = route.index + 1;
							navigator.push({
								title: 'Scene ' + nextIndex,
								index: nextIndex,
							});
						}}
						// Function to call to go back to the previous scene
						onBack={() => {
							if (route.index > 0) {
								navigator.pop();
							}
						}}
					/>
				}
			/>
		)
	}
}

class MyScene extends Component {
	render() {
		return (
			<View style={{paddingTop: 50}}>
				<Text>Current Scene: { this.props.title }</Text>
				<TouchableHighlight onPress={this.props.onForward}>
					<Text>Tap me to load the next scene</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.props.onBack}>
					<Text>Tap me to go back</Text>
				</TouchableHighlight>
			</View>
		)
	}
}
AppRegistry.registerComponent('ReactNative_intelliSchool', () => SimpleNavigationApp);
