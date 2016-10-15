`use strict`;
import React, { Component } from 'react';
import {
	StyleSheet,
	Navigator
} from 'react-native';
import SwipeGuide from '../component/SwipeGuide';
class GuideNavigator extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Navigator
				initialRoute = {{name:"SwipeGuide", component: SwipeGuide}}
				renderScene={(route, navigator) => {
					let Component = route.component;
					return <Component {...route.params} navigator={navigator} />
			}} />
		)
	}
}

module.exports = GuideNavigator;