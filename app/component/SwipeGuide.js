/**
 * Created by JohnTrump on 10/16/16.
 * Description: 首次开启APP的轮播组件
 *
 */
"use strict";
import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    AsyncStorage
} from 'react-native';

import Swiper from 'react-native-swiper';
import TabBar from '../ios/TabBar'
import App from '../android/App';
export default class SwipeGuide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            /*<TabBar/>*/
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                loop={false}
                paginationStyle={{bottom: 60}}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>明理精工</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>与时偕行</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text} onPress={() => {
                        {
                            /*使用resetTo避免进入App还可以后退,如果是pop的话,可以再次压入栈*/
                            console.log("press and resetTo..");
                            /*Notice:AsyncStorage只能存储String
                             *See:
                             * http://stackoverflow.com/questions/35596187/react-native-asyncstorage-storing-values-other-than-strings
                             * */
                            AsyncStorage.setItem("isfirst", "false")
                                .then(() => {
                                    console.log("存储成功");
                                })
                                .catch((error) => {
                                    console.log("捕获异常");
                                    console.log(error);
                                }).done();
                        }
                        this.props.navigator.resetTo({
                            component: Platform.OS === 'ios' ? TabBar : App,
                            title: "学院新闻",
                            navigationBarHidden: true,
                        })
                    }}>Hey,厦理人!</Text>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});