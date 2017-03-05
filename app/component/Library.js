/**
 * Created by JohnTrump on 10/16/16.
 * Description: 图书馆组件
 *
 */
`use strict`;
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    TouchableHighlight,
} from 'react-native';
import GiftedListView from 'react-native-gifted-listview';
import LibraryItem from './LibraryItem';
import LibraryDetail from './LibraryDetail';
import Utils from '../Utils';

export default class Library extends Component {
    static defaultProps = {};

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
            Utils.get(`/library/?page=${page}`, function (data) {
                console.log(data);
                let bookList = data.result.data;
                if (data.pageInfo.nextPage === data.pageInfo.totalPage) {
                    callback(bookList, {
                        allLoaded: true
                    });
                } else {
                    callback(bookList);
                    page++;
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
                        component: LibraryDetail,
                        name: 'libraryDetail',//for android navigator
                        title: "豆瓣书评",
                        isChild: 'true',
                        passProps: {
                            url: rowData.url
                        }
                    });
                }}
            >
                <View>
                    <LibraryItem rowData={rowData}/>
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
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#FFF',
    },
    row: {
        height: 44,
    },
});