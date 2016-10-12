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
	ScrollView,
	Image,
} from 'react-native';

export default class ReactNative_intelliSchool extends Component {
	render(){
		return(
			<ScrollView>
				<Text style={{fontSize:30}}>Scroll me plz</Text>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Text style={{fontSize:30}}>If you like</Text>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Text style={{fontSize:30}}>Scrolling down</Text>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
				<Image source={require('./img/favicon.png')}></Image>
			</ScrollView>
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
