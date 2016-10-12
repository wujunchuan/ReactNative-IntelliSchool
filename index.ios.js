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
	TextInput,
} from 'react-native';

export default class ReactNative_intelliSchool extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}
	render() {
		return (
			<View style={{padding: 10}}>
				<TextInput
					style={{height: 40}}
					placeholder="Type here to translate!"
					onChangeText={(text)=>this.setState({text})}
				/>
				<Text style={{padding: 10, fontSize: 42}}>
					{this.state.text}
				</Text>
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
