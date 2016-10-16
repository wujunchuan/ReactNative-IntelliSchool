/**
 * Created by JohnTrump on 10/16/16.
 * Description: 这是一个开场动画的组件
 *  
 */
"use strict";
import React, { Component } from 'react';
import {
	StyleSheet,
	Animated,
	Easing,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Utils from '../utils'
const AnimatedIcon = Animated.createAnimatedComponent(Icon);//创建Icon动画组件
/**
 * 样式
 */
const styles = StyleSheet.create({
	entrance:{
		position:"absolute",
		top:0, left:0,
		height:Utils.size.height,
		width:Utils.size.width,
		backgroundColor:"#1b95e0",
		alignItems:"center",
		justifyContent:"center"
	},
	twitter:{
		color:"#fff",
		position:"relative",
		top:-20,
		textAlign: "center"
	},
});

class Entrance extends Component{
	static propTypes = {
		hideThis:React.PropTypes.func.isRequired,
	};
	constructor(props){
		super(props);
		this.state = {
			transformAnim:new Animated.Value(1),//角度
			opacityAnim:new Animated.Value(1),//透明度
		}
	}

	componentDidMount() {
		Animated.timing(
			this.state.transformAnim,
			{
				toValue:50,
				duration:1000,
				delay:2000,
				easing:Easing.elastic(2),
			},
		).start();
		Animated.timing(
			this.state.opacityAnim,{
				toValue:0,
				duration:800,
				easing:Easing.elastic(1),
				delay:2000,
			},
		).start();
		setTimeout(()=>{
			this.props.hideThis();
		},2300);
	}
	render(){
		return (
			<Animated.View
				style={[
					{opacity:this.state.opacityAnim},
					styles.entrance,
				]}
			>
				<AnimatedIcon
					size={150}
					name="logo-github"
					style={[
						{transform:[{scale:this.state.transformAnim}]},
						styles.twitter,
					]}
				>
				</AnimatedIcon>
			</Animated.View>
		)
	}

}

module.exports = Entrance;