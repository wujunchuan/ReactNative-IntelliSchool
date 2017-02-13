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
    ToastAndroid,
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
            route: 'news',
            isChild:false
        };
        StatusBar.setHidden(false);
        let that = this;
        StatusBar.setBackgroundColor('rgba(33, 151, 244, 1)', true);
        BackAndroid.addEventListener('hardwareBackPress', () => {
            let currentRoutes = this.state.navigator.getCurrentRoutes();
            /*
                如果只剩下1个路由,就显示 *再按一次退出应用*的效果
                true:不触发exitApp()
                false:触发exitApp();
            */
            this.refs['DRAWER'].closeDrawer();
            if (currentRoutes.length === 1) {
                if(!this.lastBackPressed){
                    ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
                    this.lastBackPressed = Date.now();
                    setTimeout(() => {
                        this.lastBackPressed = null;
                    }, 1500);
                }else{
                    if(new Date().getTime() - this.lastBackPressed<1500) {
                        return false;//退出
                    }
                }
                return true;
            }
            /*更新ToolBar的标题*/
            that.setState({
                title:currentRoutes[currentRoutes.length-2].title,
                isChild:currentRoutes[currentRoutes.length-2].isChild||false
            });
            this.state.navigator.pop();
            return true;
        });
    }

    renderScene = (router, navigator) => {
        let Component = null;
        this.state.navigator = navigator;
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
        if (this.state.navigator.getCurrentRoutes()[lastIndex].name === target.route) {
            this.refs['DRAWER'].closeDrawer();
            return false;
        }
        this.state.navigator.push({
            name: target.route,
            title:target.title
        });
        /*使用state来区分当前激活状态*/
        this.setState({
            title:target.title,
            route: target.route
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
                    items = {
                        [
                            {
                                icon: 'home',
                                value: '学院新闻',
                                active: !this.state.route || this.state.route === 'news',
                                onPress: () => this.onNavPress({route:'news',title:'学院新闻'}),
                                onLongPress: () => this.onNavPress({route:'news',title:'学院新闻'})
                            },
                            {
                                icon: 'message',
                                value: '小吐槽',
                                active: !this.state.route || this.state.route === 'xiaotucao',
                                onPress: () => this.onNavPress({route:'xiaotucao',title:'小吐槽'}),
                                onLongPress: () => this.onNavPress({route:'xiaotucao',title:'小吐槽'})
                            },
                            {
                                icon: 'search',
                                value: '便利服务',
                                active: !this.state.route || this.state.route === 'service',
                                onPress: () => this.onNavPress({route:'service',title:'便捷服务'}),
                                onLongPress: () => this.onNavPress({route:'service',title:'便捷服务'})
                            },
                            {
                                icon: 'settings',
                                value: '个人中心',
                                active: !this.state.route || this.state.route === 'user',
                                onPress: () => this.onNavPress({route:'user',title:'个人中心'}),
                                onLongPress: () => this.onNavPress({route:'user',title:'个人中心'})
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
                    initialRoute={{name: 'news',title:'学院新闻'}}
                    configureScene={this.configureScense}
                    renderScene={this.renderScene}
                >
                </Navigator>
                <MaterialToolbar
                    ref={'TOOLBAR'}
                    title={this.state.title}
                    icon = {'menu'}
                    onIconPress={() => this.onMenuPress()}
                    //icon={this.state.isChild ? 'keyboard-backspace' : 'menu'}
                    //onIconPress={() => this.state.isChild ? this.state.navigator.pop() : this.onMenuPress()}
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