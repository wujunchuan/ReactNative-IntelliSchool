/**
 * 安卓抽屉
 * @author junchuan.wu
 * @date :  2017/2/3
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    StatusBar,
    DrawerLayoutAndroid,
    BackAndroid,
    ScrollView,
    Navigator,
    Image,
    Text,
} from 'react-native';
import Utils from '../Utils';
/*新闻列表组件*/
import News from '../component/News';
/*便捷服务组件*/
import Service from '../component/Service';
/*新闻详情组件*/
import NewsDetail from '../component/NewsDetail';
/*小吐槽组件*/
import Tucao from '../component/Tucao';
/*个人中心组件*/
import Personal from '../component/Personal';
/*天气查询模块*/
import Weather from '../component/Weather';
/*快递查询模块*/
import Express from '../component/Express';
import {Toolbar as MaterialToolbar, Avatar, COLOR, TYPO, Drawer} from 'react-native-material-design';
export default class App extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            title: '学院新闻',
            route: 'news'
        };
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('rgba(33, 151, 244, 1)', true);
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.state.navigator.getCurrentRoutes().length === 1) {
                return false;
            }
            this.state.navigator.pop();
            return true;
        });
    }

    renderScene = (router, navigator) => {
        let Component = null;
        this.state.navigator = navigator;
        // console.log(this.refs['TOOLBAR']);
        switch (router.name) {
            case 'news':
                Component = News;
                break;
            case 'xiaotucao':
                Component = Tucao;
                break;
            case 'service':
                Component = Service;
                break;
            case 'user':
                Component = Personal;
                break;
            case 'detail':
                Component = NewsDetail;
                break;
            case 'express':
                Component = Weather;
                break;
            case 'weather':
                Component = Express;
                break;
        }
        /*注意这里,将navigator作为属性props传递给各个场景的组件*/
        return <Component navigator={navigator}/>;
    };

    configureScense(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromRight;
    }

    onNavPress(target) {
        /*为了避免路由栈中重复,在打开新页面前先判断一下是否已存在*/
        const lastIndex = this.state.navigator.getCurrentRoutes().length - 1;
        if (this.state.navigator.getCurrentRoutes()[lastIndex].name === target) {
            this.refs['DRAWER'].closeDrawer();
            return false;
        }
        this.state.navigator.push({
            name: target
        });
        /*使用state来区分当前激活状态*/
        this.setState({
            route: target
        });
        //关闭drawer
        this.refs['DRAWER'].closeDrawer();
    }

    onMenuPress() {
        this.refs['DRAWER'].openDrawer();
    }

    render() {
        /*Drawer的JSX*/
        let navigationView = (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('../../img/background1.png')}/>}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image
                            source={{uri: "http://facebook.github.io/react-native/img/opengraph.png?2"}}/>}/>
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>React Native</Text>
                    </View>
                </Drawer.Header>
                <Drawer.Section
                    items=
                        {
                            [
                                {
                                    icon: 'home',
                                    value: '学院新闻',
                                    active: !this.state.route || this.state.route === 'news',
                                    onPress: () => this.onNavPress('news'),
                                    onLongPress: () => this.onNavPress('news')
                                },
                                {
                                    icon: 'message',
                                    value: '小吐槽',
                                    active: !this.state.route || this.state.route === 'xiaotucao',
                                    onPress: () => this.onNavPress('xiaotucao'),
                                    onLongPress: () => this.onNavPress('xiaotucao')
                                },
                                {
                                    icon: 'search',
                                    value: '便利服务',
                                    active: !this.state.route || this.state.route === 'service',
                                    onPress: () => this.onNavPress('service'),
                                    onLongPress: () => this.onNavPress('service')
                                },
                                {
                                    icon: 'settings',
                                    value: '个人中心',
                                    active: !this.state.route || this.state.route === 'user',
                                    onPress: () => this.onNavPress('user'),
                                    onLongPress: () => this.onNavPress('user')
                                }
                            ]
                        }
                />
            </Drawer>
        );
        return (

            <DrawerLayoutAndroid
                ref={'DRAWER'}
                drawerWidth={Utils.getScreenParam().size.width * 0.8}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}/*渲染Drawer的View*/
            >
                <Navigator
                    initialRoute={{name: 'news'}}
                    configureScene={this.configureScense}
                    renderScene={this.renderScene}
                >
                </Navigator>
                <MaterialToolbar
                    ref={'TOOLBAR'}
                    title={this.state.title}
                    icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                    onIconPress={() => navigator && navigator.isChild ? navigator.back() : this.onMenuPress()}
                />

            </DrawerLayoutAndroid>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        marginLeft: Utils.getScreenParam().size.width * 0.2,
        marginTop: Utils.getScreenParam().size.height * 0.05
    }
});