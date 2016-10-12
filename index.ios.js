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
				<View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
				<View style={{width:100,height:100,backgroundColor:'skyblue'}}></View>
				<View style={{width:150,height:150,backgroundColor:'steelblue'}}></View>
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
