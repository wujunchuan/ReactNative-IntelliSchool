/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    StatusBar,
    AsyncStorage
} from 'react-native';
import GuideNavigator from './app/component/GuideNavigator'
import Entrance from './app/component/Entrance';
import Util from './app/Utils';
import Drawer from './app/android/Drawer';
export default class ReactNative_intelliSchool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*是否显示启动页面,Notice:远程调试状态下可能会卡顿!!*/
            showStart: false,
            /*是否显示初次启动页面的导航页,如果是第一次打开的话,就是true,否则为false*/
            showGuide: false
        };
    }

    /**
     * 在组件在渲染先前获取是否第一次打开app
     */
    componentWillMount() {
        this._getFirst();
    }

    /**
     * 从AsyncStorage中取是否为第一次登陆的标记
     * @private
     */
    _getFirst() {
        AsyncStorage.getItem("isfirst")
            .then((value) => {
                if (value !== null) {
                    this.setState({
                        /*因为AsyncStorage取出来的都是String类型,我这里用JSON库直接进行转换TODO:方便测试,下面这行注释*/
                        /*showGuide: JSON.parse(value)*/
                    });
                } else {
                    console.warn("没有isfirst记录");
                }
            })
            .catch((error) => {
                console.error("读取isfirst发生错误..");
                console.log(error);
            }).done();
    }

    _hideEntrance() {
        this.setState({
            showStart: false
        })
    }

    componentDidMount() {
        /*Android 平台需要用这个来隐藏*/
        StatusBar.setHidden(true);
    }

    render() {
        /*判断是否是第一次打开APP应用*/
        let entrance = null;
        if (this.state.showGuide) {
            if (this.state.showStart) {
                entrance = <Entrance hideThis={() => this._hideEntrance()}/>
            } else {
                entrance = <View style={styles.secondView}><GuideNavigator/></View>
            }
        } else {
            if (this.state.showStart) {
                entrance = <Entrance hideThis={() => this._hideEntrance()}/>
            } else {
                entrance = <View style={styles.secondView}><Drawer/></View>
            }
        }

        return (
            <View style={{width: Util.getScreenParam().size.width, height: Util.getScreenParam().size.height}}>
                {entrance}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    secondView: {
        position: 'absolute',
        width: Util.getScreenParam().size.width,
        height: Util.getScreenParam().size.height,
    }
});

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);
