/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';


export default class ReactNative_intelliSchool extends Component {
	render() {
		return (
			<View>
				<Text style={styles.red}>Just Red</Text>
				<Text style={styles.bigblue}>Just bigblue</Text>
				<Text style={[styles.bigblue,styles.red]}>bigblue then red</Text>
				<Text style={[styles.red,styles.bigblue]}>red then bigblue</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	red:{
		color:"red"
	},
	bigblue:{
		color:"blue",
		fontWeight:"bold",
		fontSize:30,
	},
});

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);
