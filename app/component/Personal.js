/**
 * Created by JohnTrump on 10/16/16.
 * Description: 个人中心的组件
 *
 */
`use strict`;
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

class Personal extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<View style={styles.tabContent}>
				<TouchableOpacity onPress={this._navigateToSubview}>
					<View style={styles.button}><Text style={styles.buttonText}>很多个人配置</Text></View>
				</TouchableOpacity>
			</View>
		)
	};
	_navigateToSubview(){
		alert('On right button press!');
	}
}

var styles = StyleSheet.create({
	navigator: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	tabContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

module.exports = Personal;