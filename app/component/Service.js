/**
 * Created by JohnTrump on 10/16/16.
 * Description: 便捷服务组件
 *
 */
`use strict`;
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
/*天气查询模块*/
import Weather from './Weather';
/*快递查询模块*/
import Express from './Express';
export default class Service extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tabContent}>
                <TouchableOpacity onPress={() => this.props.navigator.push({
                    component: Weather,
                    title: '天气预报'
                })}>
                    <View style={styles.button}><Text style={styles.buttonText}>天气查询</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.push({
                    component: Express,
                    title: '快递查询'
                })}>
                    <View style={styles.button}><Text style={styles.buttonText}>快递查询</Text></View>
                </TouchableOpacity>

            </View>
        )
    };
}

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
});