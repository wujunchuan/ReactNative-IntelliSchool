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
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import NewsList from './NewsList';
import NewsItemWithPicture from './NewsItemWithPicture'
export default class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollableTabView
                style={{marginTop: 64}}
                initialPage={0}
                tabBarBackgroundColor="#4E78BE"
                tabBarTextStyle={{color: '#FFFFFF', fontSize: 15}}
                tabBarUnderlineStyle={{backgroundColor: '#FFFFFF', height: 3}}
                renderTabBar={() => <DefaultTabBar tabStyle={{paddingBottom: 0}}/>}
            >
                <NewsList tabLabel="校园新闻"/>
                <View tabLabel="通知公告">
                    <NewsItemWithPicture/>
                    <NewsItemWithPicture/>
                    <NewsItemWithPicture/>
                </View>
                <View tabLabel="党建工作">
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.push({
                            component: NewsDetail,
                            title: "新闻详情",
                        })
                    }}>
                        <View style={styles.button}><Text style={styles.buttonText}>很多新闻</Text></View>
                    </TouchableOpacity>
                </View>
            </ScrollableTabView>
        );
    };
}

const styles = StyleSheet.create({});