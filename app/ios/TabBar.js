/**
 * Created by JohnTrump on 10/16/16.
 * Description: IOS平台下的主页底部Tab标签
 *
 */
`use strict`;
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import News from '../component/News';
import Bbs from '../component/Bbs';
import Service from '../component/Service';
import Personal from '../component/Personal';

import {
    StyleSheet,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';
/*此处定义Tab的标识常量*/
const NEWS_TAB = 'homeTab';
const BBS_TAB = 'messageTab';
const SERVICE_TAB = 'discoverTab';
const ME_TAB = 'meTab';


/**
 * 定义TabBar组件
 */
export default class TabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: NEWS_TAB,
        };
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
                    selected={this.state.selectedTab === NEWS_TAB}
                    onPress={() => {
                        this.setState({
                            selectedTab: NEWS_TAB,
                        });
                    }}>
                    <NavigatorIOS
                        barTintColor='#5F97F6'
                        titleTextColor='white'
                        style={styles.navigator}
                        initialRoute={{
                            component: News,
                            passProps: {this},//如果需要传递什么参数,在这里修改
                            title: "学院新闻",
                        }}
                    />
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
                    <NavigatorIOS
                        barTintColor='#5F97F6'
                        titleTextColor='white'
                        style={styles.navigator}
                        initialRoute={{
                            component: Bbs,
                            passProps: {},//如果需要传递什么参数,在这里修改
                            title: "小吐槽",
                        }}
                    />
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
                    <NavigatorIOS
                        barTintColor='#5F97F6'
                        titleTextColor='white'
                        style={styles.navigator}
                        initialRoute={{
                            component: Service,
                            passProps: {this},//如果需要传递什么参数,在这里修改
                            title: "便利服务",
                        }}
                    />
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
                    <NavigatorIOS
                        barTintColor='#5F97F6'
                        titleTextColor='white'
                        style={styles.navigator}
                        initialRoute={{
                            component: Personal,
                            passProps: null,//如果需要传递什么参数,在这里修改
                            title: "个人中心",
                        }}
                    />
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}

/**
 * 组件样式
 */
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