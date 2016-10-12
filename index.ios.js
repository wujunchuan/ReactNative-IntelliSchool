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
	View
} from 'react-native';


export default class ReactNative_intelliSchool extends Component {
	render() {
		return (
			<View style={{
				flex: 1,
				flexDirection: 'column',
				justifyContent:'center',
				alignItems:'stretch'
			}}>{/*默认值就是column*/}
				<View style={{height:50, backgroundColor: 'powderblue'}}></View>
				<View style={{height:50, backgroundColor: 'skyblue'}}></View>
				<View style={{height:50, backgroundColor: 'steelblue'}}></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	red: {
		color: "red"
	},
	bigblue: {
		color: "blue",
		fontWeight: "bold",
		fontSize: 30,
	},
});

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);
