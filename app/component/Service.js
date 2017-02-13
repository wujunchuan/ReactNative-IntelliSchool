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
    Modal,
    TouchableOpacity,
} from 'react-native';
/*天气查询模块*/
import Weather from './Weather';
/*快递查询模块*/
import Express from './Express';
export default class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false
        };
    }
    setModalVisible(visible){
        this.setState({modalVisible: visible})
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
                    this.setModalVisible(true);
                }}>
                    <View style={styles.button}><Text style={styles.buttonText}>显示Modal</Text></View>
                </TouchableOpacity>

                <Modal
                    animationType={'fade'}//显示动画
                    transparent={true}//透明
                    visible={this.state.modalVisible}//是否显示
                >
                    <View>
                        <TouchableOpacity onPress={()=>{
                            this.setModalVisible(false);
                        }}>
                            <Text style={{fontSize:30}}>Close</Text>
                        </TouchableOpacity>
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
});