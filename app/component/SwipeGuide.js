/**
 * Created by JohnTrump on 10/16/16.
 * Description: 首次开启APP的轮播组件
 *
 */
"use strict";
import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import Swiper from 'react-native-swiper';
import TabBar from '../ios/TabBar'

class SwipeGuide extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			/*<TabBar/>*/
			<Swiper
				style={styles.wrapper}
				showsButtons={false}
				loop={false}
				paginationStyle={{bottom: 60}}>
				<View style={styles.slide1}>
					<Text style={styles.text}>高考不努力</Text>
				</View>
				<View style={styles.slide2}>
					<Text style={styles.text}>厦软当兄弟</Text>
				</View>
				<View style={styles.slide3}>
					<Text style={styles.text} onPress={()=>{
						{/*使用resetTo避免进入App还可以后退,如果是pop的话,可以再次压入栈*/}
						this.props.navigator.resetTo({
							component: TabBar,
							title: "",
							navigationBarHidden: true,
						})
					}}>Hey,兄弟!</Text>
				</View>
			</Swiper>
		);
	}
}

var styles = StyleSheet.create({
	wrapper: {
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5',
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	}
});

module.exports = SwipeGuide;