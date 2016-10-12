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

class Bink extends Component {
	constructor(props) {
		super(props);
		this.state = {showText: true};
		setInterval(()=> {
			this.setState({showText: !this.state.showText})
		}, 1000);
	}

	render() {
		let display = this.state.showText ? this.props.text : ' ';//如果showText为假 就不现实字符串
		return(
			<Text>{display}</Text>
		)
	}
}

export default class ReactNative_intelliSchool extends Component {
	render() {
		return (
			<View>
				<Bink text="Hello world"/>
				<Bink text="hahahaha"/>
				<Bink text="Hello world"/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);
