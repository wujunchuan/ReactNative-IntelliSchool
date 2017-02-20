/**
 * Created by JohnTrump on 10/16/16.
 * Description: 天气查询组件
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

export default class NewsDetail extends Component {
    constructor(props) {
        super(props);
        //this._testJSON();
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
    _testJSON(){
        /*uri:http://7xvzr6.com1.z0.glb.clouddn.com/weather.json*/
        fetch('http://7xvzr6.com1.z0.glb.clouddn.com/weather.json').then((value)=>{
            console.log(value);
        })
    }
    _getWeatherJSON() {
        const params = {
            cityname: '厦门', /*城市名称由定位来*/
            dtype: 'json',
            key: '55747d2964437629d3f6db58f84ee44b',
            format: 1
        };
        const _weatherApi = encodeURI(`http://v.juhe.cn/weather/index?cityname=${params.cityname}&dtype=${params.dtype}&key=${params.key}`);
        fetch(_weatherApi).then((value) => {
            console.log(value);
        }).catch((error) => {
            console.log(error);
        });
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
