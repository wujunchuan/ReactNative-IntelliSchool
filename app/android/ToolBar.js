/**
 * 工具条
 * @author junchuan.wu
 * @date :  2017/2/3
 */

import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
export default class ToolBar extends Component {

/*
    static contextTypes = {
        navigator: PropTypes.object
    };

    static propTypes = {
        onIconPress: PropTypes.func.isRequired
    };
*/
    constructor(props) {
        super(props);
        this.state = {
            title: "学院新闻",
        };
    }

    render() {
        return (
            <MaterialToolbar
                title={navigator && navigator.currentRoute ? navigator.currentRoute.title : 'Welcome'}
                icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                onIconPress={() => navigator && navigator.isChild ? navigator.back() : menu()}
            />
        );
    }
}
const styles = StyleSheet.create({});