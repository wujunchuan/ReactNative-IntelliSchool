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
    Image,
    TouchableOpacity,
} from 'react-native';
import Utils from '../Utils';
import Toast, {DURATION} from 'react-native-easy-toast';
import Spinner from 'react-native-loading-spinner-overlay';
export default class WeatherDetail extends Component {
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
        this._getWeatherJSON('厦门');
    }

    render() {
        let loading = this.state.isLoading;
        let today = this.state.weather.today;
        let sk = this.state.weather.sk;
        let future = this.state.weather.future;
        return (
            <View style={styles.container} >
                <Spinner visible={loading}/>
                <View style={styles.upperContainer}>
                    <View>
                        <Text style={styles.address}>{today.city}</Text>
                    </View>
                    <View style={styles.today}>
                        <Image
                            source={{uri: `http://static.caogfw.cn/campus/weather/${today.weather_id.fa}.png`}}
                            style={{
                                width:120,
                                height:120
                            }}
                        />
                        <Text style={styles.todayTemp}>{sk.temp}℃</Text>
                    </View>
                    <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={styles.todayWeahter}>{today.weather}</Text>
                        <Text style={styles.todayRange}>{today.temperature}</Text>
                        <Text style={styles.todayAdvice}>{today.dressing_advice}</Text>
                    </View>
                    <View style={{flexDirection: 'row',marginTop:10,justifyContent: 'space-around'}}>
                        <Text style={styles.todayTime}>                          </Text>
                        <Text style={styles.todayTime}>{today.date_y} {today.week}  {sk.time} </Text>
                    </View>
                </View>
                <View style={styles.belowContainer}>
                    <ScrollView
                        style={{marginTop:-8, marginBottom:100}}
                        automaticallyAdjustContentInsets={false}
                    >
                        <Text style={{fontSize: 8, color:'#fff'}}>power by 中国气象局</Text>
                        {Object.keys(future).map((name, index)=>{
                            let day = this.state.weather.future[name];
                            return (
                                <View key={index} style={{flexDirection:'row',alignItems:'center', justifyContent: 'space-between',
                                    borderBottomColor:'#fff', borderBottomWidth:Utils.getScreenParam().ratio*.25,
                                    marginVertical:2,width:305,height:30}}>
                                    <Text style={[styles.featureFont]}>{day.week}</Text>
                                    <Image
                                        source={{uri: `http://static.caogfw.cn/campus/weather/${day.weather_id.fa}.png`}}
                                        style={{
                                            width:17,
                                            height:17,
                                            marginLeft:30
                                        }}
                                    />
                                    <Text style={styles.featureFont}>{day.temperature}</Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                <Toast ref="toast"
                       position='center'
                       style={{backgroundColor: '#FF74B9', opacity: 0.9, width: 210}}
                />
            </View>
        );

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
        },(error)=>{
            this.setState({
                isLoading: false
            });
            this.refs.toast.show(`查询失败,请检查卡号是否正确`,1000);
        });
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        paddingBottom:50
    },
    upperContainer:{
        marginTop:60,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        width:Utils.getScreenParam().size.width,
        height:Utils.getScreenParam().size.height*.5,
        backgroundColor:'#66D4FF',
        padding:20
    },
    belowContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FFA9A9',
        width:Utils.getScreenParam().size.width,
        height:Utils.getScreenParam().size.height*.5,
        padding:8
    },
    address:{
        fontSize:36,
        color:'#fff'
    },
    today:{
        flexDirection:'row',
        alignItems:'center',
    },
    todayIcon:{

    },
    todayTemp:{
        fontSize:72,
        color:'#fff',
        justifyContent:'flex-end'
    },
    todayWeahter:{
        fontSize:24,
        marginVertical:2,

        color:'#fff'
    },
    todayRange:{
        fontSize:12,
        marginVertical:2,
        color:'#fff'
    },
    todayAdvice:{
        fontSize:13,
        marginVertical:2,
        lineHeight:18,
        color:'#fff'
    },
    todayTime:{
        fontSize:13,
        color:'#fff'
    },
    featureFont:{
        fontSize:12,
        color:'#fff'
    }
});
