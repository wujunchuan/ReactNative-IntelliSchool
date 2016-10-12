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
			<View style={{height:300}}>
				<View style={{flex:1,backgroundColor:'powderblue'}}></View>
				<View style={{flex:2,backgroundColor:'skyblue'}}></View>
				<View style={{flex:3,backgroundColor:'steelblue'}}></View>
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
