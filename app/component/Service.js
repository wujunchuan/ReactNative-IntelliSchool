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

class Bbs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tabContent}>
                <TouchableOpacity onPress={()=>this._navigateToSubview()}>
                    <View style={styles.button}><Text style={styles.buttonText}>很多便利服务</Text></View>
                </TouchableOpacity>
            </View>
        )
    };

    _navigateToSubview() {
        const params = {
            cityname:'厦门',
            dtype:'json',
            key:'55747d2964437629d3f6db58f84ee44b',
            format:1
        };
        const _weatherApi = encodeURI(`http://v.juhe.cn/weather/index?cityname=${params.cityname}&dtype=${params.dtype}&key=${params.key}`);
        fetch(_weatherApi).then((value)=>{
            console.log(value);
        }).catch((error)=>{
            console.log(error);
        });
    }
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

module.exports = Bbs;