/**
 * Created by JohnTrump on 10/16/16.
 * Description: 学院新闻的组件
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
import NewsDetail from './NewsDetail';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';

class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 55, }}
                initialPage={0}
                renderTabBar={()=><ScrollableTabBar/>}
            >
                <View style={styles.tabContent} tabLabel="新闻1">
                    <TouchableOpacity onPress={()=> {
                        this.props.navigator.push({
                            component: NewsDetail,
                            title: "新闻详情",
                        })
                    }}>{/*this指向神坑*/}
                        <View style={styles.button}><Text style={styles.buttonText}>很多新闻</Text></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabContent} tabLabel="新闻2">
                    <TouchableOpacity onPress={()=> {
                        this.props.navigator.push({
                            component: NewsDetail,
                            title: "新闻详情",
                        })
                    }}>{/*this指向神坑*/}
                        <View style={styles.button}><Text style={styles.buttonText}>很多新闻</Text></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabContent} tabLabel="新闻3">
                    <TouchableOpacity onPress={()=> {
                        this.props.navigator.push({
                            component: NewsDetail,
                            title: "新闻详情",
                        })
                    }}>{/*this指向神坑*/}
                        <View style={styles.button}><Text style={styles.buttonText}>很多新闻</Text></View>
                    </TouchableOpacity>
                </View>
            </ScrollableTabView>
        )
    };
}

var styles = StyleSheet.create({
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

module.exports = News;