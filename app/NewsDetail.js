`use strict`;
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

class NewsDetail extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<View style={styles.tabContent}>
				<TouchableOpacity onPress={this._navigateToSubview}>
					<View style={styles.button}><Text style={styles.buttonText}>新闻详情</Text></View>
				</TouchableOpacity>
			</View>
		);
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
module.exports = NewsDetail;
