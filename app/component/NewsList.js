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
    View,
    TouchableHighlight,
} from 'react-native';

import NewsItemWithPicture from './NewsItemWithPicture';
import NewsItemWithoutPicture from './NewsItemWithoutPicture'
import GiftedListView from 'react-native-gifted-listview';
import Utils from '../Utils';
export default class NewsList extends Component {
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
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            Utils.get('/school/news?currentPage='+page, function (data) {
                //获取成功
                if(data.code==='200'){
                    if(data.paging.nextPage===data.paging.pageCount) {
                        callback(data.articleList, {
                            allLoaded: true
                        });
                    }else{
                        callback(data.articleList);
                        page++;
                    }
                }
            });
        },1000);
    }


    /**
     * Render a row
     * @param {object} rowData Row data
     */
    _renderRowView(rowData) {
        console.log(rowData);
        return (
            <TouchableHighlight underlayColor='#fedeea' onPress={()=>console.log('press')}>
                <View>
                    {rowData.images==null?<NewsItemWithoutPicture rowData={rowData}/>:<NewsItemWithPicture rowData={rowData}/>}
                </View>
            </TouchableHighlight>
        );
    }

    _onEndReached() {
        // this.refs.listView._onPaginate()
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedListView
                    ref='listView'
                    onEndReachedThreshold={10}
                    rowView={this._renderRowView}
                    onFetch={this._onFetch}
                    onEndReached={() => this._onEndReached}
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
        paddingBottom: 50,
        backgroundColor: '#FFF',
    },
    row: {
        height: 44,
    },
});