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
    Text,
} from 'react-native';
import Utils from '../Utils';
import News from '../component/News';
import Service from '../component/Service';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
export default class Drawer extends Component {
    static propTypes = {};
    constructor(props) {
        super(props);
        this.state = {
            title:'学院新闻'
        };
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('rgba(33, 151, 244, 1)', true);
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if(this.state.navigator.getCurrentRoutes().length===1) {
                return false;
            }
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
                this.state.title = '学院新闻';
                break;
            case 'service':
                Component = Service;
                this.state.title = '便捷服务';
                break;
        }
        /*注意这里,将navigator作为属性props传递给各个场景的组件*/
        return <Component navigator={navigator}/>;
    };

    configureScense(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromRight;
    }

    onNavPress (target){
        this.state.navigator.push({
            name: target
        });
        //关闭drawer
        this.refs['DRAWER'].closeDrawer();
    }
    onMenuPress(){
        this.refs['DRAWER'].openDrawer();
    }
    render() {
        /*Drawer的JSX*/
        let navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}} onPress={() => this.onNavPress('service')}>跳转到便利服务</Text>
            </View>
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
                    title={this.state.title}
                    icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                    onIconPress={() => navigator && navigator.isChild ? navigator.back() : this.onMenuPress()}
                />

            </DrawerLayoutAndroid>
        );
    }
}
const styles = StyleSheet.create({});