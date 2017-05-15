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
    Image,
    Platform,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
/*天气查询模块*/
import WeatherDetail from './WeatherDetail';
/*快递查询模块*/
import Express from './Express';
/*模态框组件*/
import Modal from 'react-native-modalbox';
/*Button组件*/
import Button from 'react-native-button';
/*成绩详情页*/
import ScoreDetail from './ScoreDetail';
import Dormitory from './Dormitory';
import Ecard from './Ecard';
import Spinner from 'react-native-loading-spinner-overlay';
import Utils from '../Utils';
export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            _viewState:'',
            username:'请输入教务系统的学号',
            password:'请输入教务系统的密码',
            ma:'验证码',
            isSecret:false,
            isFirst:true,
            mapic:Platform.OS==='ios'?'http://127.0.0.1:10017/static/images/yanzheng.png':'http://10.0.2.2:10017/static/images/yanzheng.png'
        };
    }

    /*Modal open callback function*/
    _onOpen = () => {
        if(this.state.isFirst){
            alert('由于教务系统诸多限制,目前本系统只提供当前学期的成绩查询');
            this.setState({isFirst: false});//设置初次启动为false
        }else{
            //don't do anything....
        }
    };

    /*Modal close callback function*/
    _onClose = () => {
        Utils.get('/fangzheng/getpage', (data) => {
            AsyncStorage.setItem("viewState", data.viewState)
                .then(() => {
                    console.log("存储成功!");
                    this.setState({_viewState: data.viewState});
                })
                .catch((error) => {
                    console.log("捕获异常");
                    console.log(error);
                }).done();
        });
    };
    /*发送登录请求*/
    _login(){
        this.setState({isLoading: true});
        this.refs.login.close();
        //从AsyncStorage中获取_viewState作为参数 _viewState
        AsyncStorage.getItem("viewState")
            .then((value)=>{
                if(value!==null){
                    this.setState({
                        _viewState:value
                    });
                    //获取到模拟登录所需要用到的参数,然后发送给后台
                    let viewState = this.state._viewState;
                    //从state中获取username用户名
                    let username = this.state.username;
                    //从state中获取password密码
                    let password = this.state.password;
                    //从state中获取ma验证码
                    let ma = this.state.ma;
                    Utils.post('/fangzheng/login', {
                        viewState: viewState,
                        username: username,
                        password: password,
                        ma: ma
                    }, (response)=> {
                        if(response.type==200){
                           //跳转到成绩详情页面  并且将response.xh作为参数传递给下一个页面
                            this.setState({isLoading: false});
                            this.props.navigator.push({
                                component: ScoreDetail,
                                name: 'scoreDetail',
                                passProps:{
                                    xh:response.xh,
                                },
                                title: '当前学期成绩'
                            });
                        }else{
                            this.setState({isLoading: false});
                        }
                    },(error)=>{
                        this.setState({isLoading: false});
                    });
                }else{
                    console.warn("没有viewState记录");
                }
            })
            .catch((error)=>{
                console.error("读取viewState发生错误..");
                console.log(error);
            }).done();


    }
    render() {
        return (

            <ScrollView style={styles.service}>
                <Spinner visible={this.state.isLoading}/>
                <TouchableOpacity
                    activeOpacity={0.2}
                    style={{
                        marginTop: 20
                    }}
                    onPress={() => this.props.navigator.push({
                        component: WeatherDetail,
                        name: 'weather',
                        title: '天气预报'
                    })}
                >
                    <Image source={{uri: 'https://dummyimage.com/375x160/d8d8d8/ffffff&text=Weather'}}
                           style={{
                               width: Utils.getScreenParam().size.width,
                               height: Utils.getScreenParam().size.height * .24
                           }}/>
                </TouchableOpacity>
                <View
                    style={{flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', marginTop: 10}}>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={() => this.props.navigator.push({
                            component: Dormitory,
                            name: 'dormitory',
                            title: '宿舍电量查询'
                        })}
                    >
                        <Image source={{uri: 'https://dummyimage.com/181x160/d8d8d8/ffffff&text=room'}}
                               style={{
                                   width: Utils.getScreenParam().size.width * .48,
                                   height: Utils.getScreenParam().size.height * .24
                               }}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={() => this.props.navigator.push({
                            component: Express,
                            name: 'express',
                            title: '快递查询'
                        })}
                    >
                        <Image source={{uri: 'https://dummyimage.com/181x160/d8d8d8/ffffff&text=express'}}
                               style={{
                                   width: Utils.getScreenParam().size.width * .48,
                                   height: Utils.getScreenParam().size.height * .24
                               }}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.2}
                    style={{
                        marginTop: 20
                    }}
                    onPress={() => {
                        this.refs.login.open();
                    }}
                >
                    <Image source={{uri: 'https://dummyimage.com/375x160/d8d8d8/ffffff&text=Score'}}
                           style={{
                               width: Utils.getScreenParam().size.width,
                               height: Utils.getScreenParam().size.height * .24
                           }}/>
                </TouchableOpacity>
                <View
                    style={{flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', marginTop: 10}}>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={() => this.props.navigator.push({
                            component: Ecard,
                            name: 'ecard',
                            title: 'E通卡查询'
                        })}
                    >
                        <Image source={{uri: 'https://dummyimage.com/181x160/d8d8d8/ffffff&text=ecart'}}
                               style={{
                                   width: Utils.getScreenParam().size.width * .48,
                                   height: Utils.getScreenParam().size.height * .24
                               }}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={() => this.props.navigator.push({
                            component: Express,
                            name: 'express',
                            title: '快递查询'
                        })}
                    >
                        <Image source={{uri: 'https://dummyimage.com/181x160/d8d8d8/ffffff&text=12306'}}
                               style={{
                                   width: Utils.getScreenParam().size.width * .48,
                                   height: Utils.getScreenParam().size.height * .24
                               }}/>
                    </TouchableOpacity>
                </View>
                <Modal
                    style={[styles.modal, {height: 270, width: 270}]}
                    ref={"login"}
                    position={"center"}
                    isDisabled={false}
                    backdrop={true}
                    onClosed={this._onClose}
                    onOpened={this._onOpen}
                    backdropOpacity={0.7}
                >
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../img/logo-3.png')} style={{
                            width: 240, height: 35.29, marginBottom: 18,
                            marginTop: 23
                        }}/>
                        <View style={styles.infoContainer}>
                            <View style={{flexDirection: 'row', marginVertical: 10}}>
                                <Text style={{fontWeight: 'bold', color: '#7D7D7D', fontSize: 16}}>学号:</Text>
                                <View style={{borderBottomColor: '#7D7D7D', borderBottomWidth: 0.5}}>
                                    <TextInput
                                        style={{width: 137, height: 19, fontSize: 12}} value={this.state.username}
                                        onFocus={() => {
                                            this.setState({username: ''})
                                        }}
                                        onChangeText={(state) => {
                                            this.setState({username: state})
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginVertical: 10}}>
                                <Text style={{fontWeight: 'bold', color: '#7D7D7D', fontSize: 16}}>密码:</Text>
                                {/*这里有个坑,TextInput要实现单边边距的话,需要包在View内*/}
                                <View style={{borderBottomColor: '#7D7D7D', borderBottomWidth: 0.5}}>
                                    <TextInput
                                        secureTextEntry={this.state.isSecret}
                                        style={{width: 137, height: 19, fontSize: 12}}
                                        value={this.state.password}
                                        onFocus={() => {
                                            this.setState({password: '', isSecret: true})
                                        }}
                                        onChangeText={(state) => {
                                            this.setState({password: state})
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginVertical: 10}}>
                                <Text style={{fontWeight: 'bold', color: '#7D7D7D', fontSize: 16}}>验证码:</Text>
                                {/*这里有个坑,TextInput要实现单边边距的话,需要包在View内*/}
                                <View style={{borderBottomColor: '#7D7D7D', borderBottomWidth: 0.5}}>
                                    <TextInput style={{width: 90, height: 19, fontSize: 12}} value={this.state.ma}
                                               onFocus={() => {
                                                   this.setState({ma: ''})
                                               }}
                                               onChangeText={(state) => {
                                                   this.setState({ma: state})
                                               }}
                                    />
                                </View>
                                <Image
                                    ref={'ma'}
                                    source={{uri: this.state.mapic}}
                                    style={{
                                        width: 60,
                                        height: 27
                                    }}
                                />
                            </View>

                        </View>
                        <Button
                            text={'登录'}
                            style={styles.myButton}
                            containerStyle={styles.myButtonContainer}
                            onPress={() => {
                                this._login();
                            }}>
                            登录
                        </Button>
                    </View>
                </Modal>
            </ScrollView>
        );
    };
}
const styles = StyleSheet.create({
    service:{
        // marginTop: Platform.OS==='ios'?64:56,
        // height:Utils.getScreenParam().size.height-100
    },
    modal: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#75A5F6',
        shadowColor: 'rgba(0,0,0,50)',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.4,
    },
    infoContainer:{
        backgroundColor: '#fff',
        width: 212,
        height: 120,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#979797',
        justifyContent:'center',
        alignItems:'center'
    },
    myButton: {
        fontSize: 13,
        paddingVertical: 8,
        color: 'white',
        justifyContent: 'center'
    },
    myButtonContainer: {
        marginVertical: 20,
        paddingHorizontal: 61,
        height: 33,
        overflow: 'hidden',
        borderRadius: 6,
        backgroundColor: '#4E78BE'
    }
});
