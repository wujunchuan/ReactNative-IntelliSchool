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
    TouchableOpacity,
} from 'react-native';
/*天气查询模块*/
import Weather from './Weather';
/*快递查询模块*/
import Express from './Express';
/*模态框组件*/
import Modal from 'react-native-modalbox';
/*Button组件*/
import Button from 'react-native-button';
import Utils from '../Utils';
export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*Modal open callback function*/
    onOpen() {
    }

    /*Modal close callback function*/
    onClose() {
    }
    render() {
        return (
            <View style={styles.service}>
                <TouchableOpacity
                    activeOpacity={0.2}
                    style={{
                        marginTop:20
                    }}
                    onPress={() => this.props.navigator.push({
                        component: Weather,
                        name: 'weather',
                        title: '天气预报'
                    })}
                >
                    <Image source={{uri: 'https://dummyimage.com/375x160/d8d8d8/ffffff&text=Weather'}}
                           style={{
                               width: Utils.getScreenParam().size.width,
                               height:Utils.getScreenParam().size.height*.24
                           }}/>
                </TouchableOpacity>
                <View style={{flexDirection:'row', flexWrap:'nowrap',justifyContent:'space-between', marginTop:10}}>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={() => this.props.navigator.push({
                            component: Weather,
                            name: 'weather',
                            title: '天气预报'
                        })}
                    >
                        <Image source={{uri: 'https://dummyimage.com/181x160/d8d8d8/ffffff&text=12306'}}
                               style={{
                                   width: Utils.getScreenParam().size.width*.48,
                                   height:Utils.getScreenParam().size.height*.24
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
                                   width: Utils.getScreenParam().size.width*.48,
                                   height:Utils.getScreenParam().size.height*.24
                               }}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.2}
                    style={{
                        marginTop:20
                    }}
                    onPress={() => {
                        this.refs.login.open();
                    }}
                >
                    <Image source={{uri: 'https://dummyimage.com/375x160/d8d8d8/ffffff&text=Score'}}
                           style={{
                               width: Utils.getScreenParam().size.width,
                               height:Utils.getScreenParam().size.height*.24
                           }}/>
                </TouchableOpacity>
                <Modal
                    style={[styles.modal, {height: 270, width: 270}]}
                    ref={"login"}
                    position={"center"}
                    isDisabled={false}
                    swipeToClose={true}
                    backdrop={true}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    swipeThreshold={60}
                    backdropOpacity={0.7}
                >
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../img/logo-3.png')} style={{
                            width: 240, height: 35.29, marginBottom: 18,
                            marginTop: 23
                        }}/>
                        <View style={{
                            backgroundColor: '#fff', width: 212, height: 120, borderRadius: 6, borderWidth: 1,
                            borderColor: '#979797'
                        }}>

                        </View>
                        <Button
                            text={'登录'}
                            style={styles.myButton}
                            containerStyle={styles.myButtonContainer}
                            onPress={() => {
                                console.log('click loging')
                            }}>
                            登录
                        </Button>
                    </View>
                </Modal>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    service:{
        marginTop: Platform.OS==='ios'?64:56,
        height:Utils.getScreenParam().size.height-100
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