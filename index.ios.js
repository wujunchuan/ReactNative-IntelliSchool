`use strict`;
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
} from 'react-native';

import GuideNavigator from './app/component/GuideNavigator'
import Entrance from './app/component/Entrance';
import Util from './app/utils';
import TabBar from  './app/ios/TabBar'

class ReactNative_intelliSchool extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show:true
		};
	}
	_hideEntrance(){
		this.setState({
			show:false
		})
	}

	render() {
		let entrance = this.state.show?<Entrance hideThis={()=>this._hideEntrance()}/>:<View style={styles.secondView}><GuideNavigator/></View>;
		return (
			<View style={{width:Util.size.width,height:Util.size.height}}>
				{entrance}
			</View>

		);
	}
}

var styles = StyleSheet.create({
	secondView:{
		position:'absolute',
		width:Util.size.width,
		height:Util.size.height,
		backgroundColor: 'green'
	}
})

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);
// AppRegistry.registerComponent('ReactNative_intelliSchool', () => GuideNavigator);
