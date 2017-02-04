/**
 * 新闻列表
 * 使用了https://github.com/FaridSafi/react-native-gifted-listview 这个组件
 * @author junchuan.wu
 * @date :  2017/1/29
 */

'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Platform,
    View,
    TouchableHighlight,
} from 'react-native';

import NewsItemWithPicture from './NewsItemWithPicture';
import NewsItemWithoutPicture from './NewsItemWithoutPicture'
import GiftedListView from 'react-native-gifted-listview';
import Utils from '../Utils';
import NewsDetail from './NewsDetail';
export default class NewsList extends Component {
    static defaultProps = {
        type:'news'//默认类型为获取新闻
    };
    constructor(props) {
        super(props);
    }

    /**
     * Will be called when refreshing
     * Should be replaced by your own logic
     * @param {number} page Requested page to fetch
     * @param {function} callback Should pass the rows
     * @param {object} options Inform if first load
     */
    _onFetch = (page = 1, callback, options) => {
        setTimeout(() => {
            Utils.get('/school/' + this.props.type +'?currentPage=' + page, function (data) {
                //获取成功
                if (data.code === '200') {
                    let articleList = data.articleList;
                    if (data.paging.nextPage === data.paging.pageCount) {
                        callback(articleList, {
                            allLoaded: true
                        });
                    } else {
                        callback(articleList);
                        page++;
                    }
                }
            });
        }, 100);
    };


    /**
     * Render a row
     * @param {object} rowData Row data
     */
    _renderRowView = (rowData) => {
        return (
            <TouchableHighlight
                underlayColor='#fedeea'
                onPress={() => {
                    this.props.navigator.push({
                        component: NewsDetail,
                        title: "新闻详情",
                        passProps:{
                            sysId:rowData.sysId
                        }
                    });
                }}
            >
                <View>
                    {rowData.images == null ? <NewsItemWithoutPicture rowData={rowData}/> :
                        <NewsItemWithPicture rowData={rowData}/>}
                </View>
            </TouchableHighlight>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <GiftedListView
                    onEndReachedThreshold={10}
                    rowView={this._renderRowView}
                    onFetch={this._onFetch}
                    firstLoader={true} // display a loader for the first fetching
                    pagination={true} // enable infinite scrolling using touch to load more
                    refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                    withSections={false} // enable sections
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#FFF',
    },
    row: {
        height: 44,
    },
});