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
export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    /*Modal open callback function*/
    onOpen(){
    }
    /*Modal close callback function*/
    onClose(){
    }
    render() {
        return (
            <View style={styles.tabContent}>
                <TouchableOpacity onPress={() => this.props.navigator.push({
                    component: Weather,
                    name:'weather',
                    title: '天气预报'
                })}>
                    <View style={styles.button}><Text style={styles.buttonText}>天气查询</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigator.push({
                    component: Express,
                    name:'express',
                    title: '快递查询'
                })}>
                    <View style={styles.button}><Text style={styles.buttonText}>快递查询</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.refs.login.open();
                }}>
                    <View style={styles.button}><Text style={styles.buttonText}>显示Modal</Text></View>
                </TouchableOpacity>

                <Modal
                    style={[styles.modal,{height: 270,width: 270}]}
                    ref={"login"}
                    position={"center"}
                    isDisabled={false}
                    swipeToClose={true}
                    backdrop={true}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    swipeThreshold={60}
                    backdropOpacity={0.2}
                >
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../img/logo-3.png')} style={{width:240,height:35.29, marginBottom:18,
                            marginTop:23
                        }}/>
                        <View style={{backgroundColor:'#fff',width:212,height:120, borderRadius:6, borderWidth:1,
                            borderColor:'#979797'
                        }}>

                        </View>
                        <Button
                            style={styles.myButton}
                            containerStyle={styles.myButtonContainer}
                            onPress={()=>{
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
    modal: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#75A5F6',
        shadowColor: 'rgba(0,0,0,50)',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 0.4,
    },
    myButton:{
        fontSize: 13,
        paddingVertical: 8,
        color: 'white',
        justifyContent:'center'
    },
    myButtonContainer:{
        marginVertical:20,
        paddingHorizontal: 61,
        height:33,
        overflow:'hidden',
        borderRadius:6,
        backgroundColor: '#4E78BE'
    }
});