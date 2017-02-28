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
import Utils from '../Utils';
import Spinner from 'react-native-loading-spinner-overlay';
export default class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadding:true,
            weather:{
                future:{
                    'day_20170228':{
                        weather_id:{
                            fa:'0',
                            fb:'0'
                        }
                    }
                },//未来天气
                sk:{},//当前天气
                today:{
                    weather_id:{
                        fa:'0',
                        fb:'0',
                    }
                },//今日天气
            }
        };
        //this._testJSON();
        this._getWeatherJSON('厦门');
    }

    render() {
        let loading = this.state.isLoading;
        let today = this.state.weather.today;
        let sk = this.state.weather.sk;
        let future = this.state.weather.future;
        return (
            <View style={styles.container}>
                <Spinner visible={loading}/>
                <Text>时间:{today.date_y} {today.week}  {sk.time} </Text>
                <Text>地点:{today.city} </Text>
                <Text>建议:{today.dressing_advice}</Text>
                <Text>温度区间:{today.temperature}</Text>
                <Text>当前温度:{sk.temp}℃</Text>
                <Text>1天气符号:{today.weather_id.fa}</Text>
                <Text>2天气符号:{today.weather_id.fb}</Text>
                <Text>power by 中国气象局</Text>
                {Object.keys(future).map((name, index)=>{
                    let day = this.state.weather.future[name];
                    return (
                        <View key={index}>
                            <Text>temperature:{day.temperature}</Text>
                            <Text>weather:{day.weather}</Text>
                            <Text>weather图标1:{day.weather_id.fa}</Text>
                            <Text>weather图标2:{day.weather_id.fb}</Text>
                            <Text>week:{day.week}</Text>
                        </View>
                    )
                })}
            </View>
        );
    }

    _testJSON() {
        /*uri:http://7xvzr6.com1.z0.glb.clouddn.com/weather.json*/
        fetch('http://7xvzr6.com1.z0.glb.clouddn.com/weather.json').then((value) => {
            console.log(value);
        })
    }

    _getWeatherJSON(cityname) {
        Utils.get(`/weather?cityname=${cityname}`, (data) => {
            //没有错误
                this.setState({
                    isLoading:false,
                    weather: {
                        future: data.result.future,
                        sk: data.result.sk,
                        today: data.result.today
                    }
                });
        });
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:100
    },
    tabContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
