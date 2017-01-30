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
    TouchableHighlight
} from 'react-native';

import GiftedListView from 'react-native-gifted-listview';

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
            let rows = ['row ' + ((page - 1) * 3 + 1), 'row ' + ((page - 1) * 3 + 2), 'row ' + ((page - 1) * 3 + 3),'row haha','row hehe    '];
            if (page === 4) {
                callback(rows, {
                    allLoaded: true, // the end of the list is reached
                });
            } else {
                callback(rows);
            }
        }, 1000); // simulating network fetching
    }


    /**
     * Render a row
     * @param {object} rowData Row data
     */
    _renderRowView(rowData) {
        return (
            <TouchableHighlight
                style={styles.row}
                underlayColor='#c8c7cc'
                onPress={()=>{
                    alert(rowData);
                }}
            >
                <Text>{rowData}</Text>
            </TouchableHighlight>
        );
    }

    _onEndReached(){
        this.refs.listView._onPaginate()
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedListView
                    ref='listView'
                    onEndReachedThreshold={10}
                    rowView={this._renderRowView}
                    onFetch={this._onFetch}
                    onEndReached={()=>this._onEndReached}
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
        paddingBottom:50,
        backgroundColor: '#FFF',
    },
    row: {
        height: 44,
    },
});