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
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import NewsDetail from './NewsDetail';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import NewsList from './NewsList';
import NewsItemWithPicture from './NewsItemWithPicture'
import NewsItemWithoutPicture from './NewsItemWithoutPicture'
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
                <NewsList tabLabel="校园新闻" navigator={this.props.navigator} type={'news'}/>
                <NewsList tabLabel="通知公告" navigator={this.props.navigator} type={'notification'}/>
                <NewsList tabLabel="党建工作" navigator={this.props.navigator} type={'party'}/>
            </ScrollableTabView>
        );
    };
}

const styles = StyleSheet.create({});