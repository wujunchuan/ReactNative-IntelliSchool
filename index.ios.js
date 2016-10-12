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
	ListView,
} from 'react-native';

export default class ReactNative_intelliSchool extends Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows([
				'wujunchuan', 'Joel', 'Java', 'Javascript', 'Jackson', 'Judile', 'Devie',
				'haha','hehe','fuck','enen'
			])
		};
	}
	render() {
		return (
			<View style={{paddingTop: 22,flex:1}}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <Text style={{fontSize:50}}>{rowData}</Text>}
					showVerticalScrollIndicator={false}
				/>
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
