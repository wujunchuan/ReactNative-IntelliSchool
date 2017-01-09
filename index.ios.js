`use strict`;
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
import Util from './app/utils';
import TabBar from  './app/ios/TabBar'


class ReactNative_intelliSchool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*是否显示启动页面,Notice:远程调试状态下可能会卡顿!!*/
            showStart: true,
            /*是否显示初次启动页面的导航页,如果是第一次打开的话,就是true,否则为false*/
            showGuide: true
        };
    }

    /**
     * 在组件在渲染先前获取是否第一次打开app
     */
    componentWillMount() {
        this._getFirst();
    }
    componentDidMount() {
        StatusBar.setBarStyle(1); //What's the fuck !? See https://github.com/fbsamples/f8app/issues/85
    }
    /**
     * 从AsyncStorage中取是否为第一次登陆的标记
     * @private
     */
    _getFirst(){
        AsyncStorage.getItem("isfirst")
            .then((value)=>{
                if(value!==null){
                    this.setState({
                        /*因为AsyncStorage取出来的都是String类型,我这里用JSON库直接进行转换*/
                       showGuide:JSON.parse(value)
                    });
                }else{
                    console.warn("没有isfirst记录");
                }
            })
            .catch((error)=>{
                console.error("读取isfirst发生错误..");
                console.log(error);
            }).done();
    }
    _hideEntrance() {
        this.setState({
            showStart: false
        })
    }

    render() {
        /*判断是否是第一次打开APP应用*/
        let entrance = null;
        if(this.state.showGuide){
            if (this.state.showStart){
                entrance = <Entrance hideThis={()=>this._hideEntrance()}/>
            }else{
                entrance = <View style={styles.secondView}><GuideNavigator/></View>
            }
        }else{
            if (this.state.showStart){
                entrance = <Entrance hideThis={()=>this._hideEntrance()}/>
            }else{
                entrance = <View style={styles.secondView}><TabBar/></View>
            }
        }

        return (
            <View style={{width: Util.size.width, height: Util.size.height}}>
                {entrance}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    secondView: {
        position: 'absolute',
        width: Util.size.width,
        height: Util.size.height,
        backgroundColor: 'green'
    }
});

AppRegistry.registerComponent('ReactNative_intelliSchool', () => ReactNative_intelliSchool);