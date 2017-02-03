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
    Text,
} from 'react-native'
import ToolBar from './ToolBar';
import Utils from '../Utils';
export default class Drawer extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {
        /*进来页面后,就显示手机的状态栏*/
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor('rgba(33, 151, 244, 1)', true);
    }
    render() {
        let navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (

            <DrawerLayoutAndroid
                drawerWidth={Utils.getScreenParam().size.width*0.8}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <ToolBar/>
            </DrawerLayoutAndroid>
        );
    }
}
const styles = StyleSheet.create({});