import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TabBarIOS,
	NavigatorIOS,
	TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

/*此处定义Tab的标识常量*/
const NEWS_TAB = 'homeTab';
const BBS_TAB = 'messageTab';
const SERVICE_TAB = 'discoverTab';
const ME_TAB = 'meTab';

const styles = StyleSheet.create({
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
	tabText: {
		color: 'white',
	},
	button: {
		marginTop: 20,
		padding: 8,
		backgroundColor: 'white',
		borderRadius: 4,
	},
});

class ColoredView extends Component {
	componentWillMount() {
		Icon.getImageSource('md-arrow-back', 30).then((source) => this.setState({ backIcon: source }));
	}

	_navigateToSubview() {
		this.props.navigator.push({
			component: ColoredView,
			title: this.props.pageText,
			leftButtonIcon: this.state.backIcon,
			onLeftButtonPress: () => this.props.navigator.pop(),
			passProps: this.props,
		});
	}

	render() {
		return (
			<View style={[styles.tabContent, {backgroundColor: this.props.color}]}>
				<Text style={styles.tabText}>{this.props.pageText}</Text>
				<TouchableOpacity onPress={() => this._navigateToSubview()}>
					<View style={styles.button}><Text style={styles.buttonText}>Tap Me</Text></View>
				</TouchableOpacity>
			</View>
		);
	}
}

class ReactNative_intelliSchool extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: NEWS_TAB,
		};
	}



	_renderContent(color, pageText) {
		const props = { color, pageText };
		return (
			<NavigatorIOS
				barTintColor='#5F97F6'
				titleTextColor='white'
				style={styles.navigator}
				initialRoute={{
					component: ColoredView,
					passProps: props,
					title: pageText,
				}}
			/>
		);
	}

	render() {
		return (
			<TabBarIOS
				tintColor="#38AEF6"
				barTintColor="#F9F9F9">
				<Icon.TabBarItemIOS
					title="学院新闻"
					iconName="ios-home-outline"
					selectedIconName="ios-home"
					bage="3"
					selected={this.state.selectedTab === NEWS_TAB}
					onPress={() => {
						this.setState({
							selectedTab: NEWS_TAB,
						});
					}}>
					{this._renderContent('#414A8C', 'Home')}
				</Icon.TabBarItemIOS>

				<Icon.TabBarItemIOS
					title="小吐槽"
					iconName="ios-star-outline"
					selectedIconName="ios-star"
					selected={this.state.selectedTab === BBS_TAB}
					onPress={() => {
						this.setState({
							selectedTab: BBS_TAB,
						});
					}}>
					{this._renderContent('#90ee90', 'Starred')}
				</Icon.TabBarItemIOS>
				<Icon.TabBarItemIOS
					title="便利服务"
					iconName="ios-settings-outline"
					selectedIconName="ios-settings"
					selected={this.state.selectedTab === SERVICE_TAB}
					onPress={() => {
						this.setState({
							selectedTab: SERVICE_TAB,
						});
					}}>
					{this._renderContent('#add8e6', 'Settings')}
				</Icon.TabBarItemIOS>

				<Icon.TabBarItemIOS
					title="我"
					iconName="ios-person-outline"
					selectedIconName="ios-person"
					selected={this.state.selectedTab === ME_TAB}
					onPress={() => {
						this.setState({
							selectedTab: ME_TAB,
						});
					}}>
					{this._renderContent('#1e90ff', 'Profile')}
				</Icon.TabBarItemIOS>
			</TabBarIOS>
		);
	}
}

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);
