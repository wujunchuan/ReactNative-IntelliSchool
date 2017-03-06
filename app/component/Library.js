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
    Alert,
} from 'react-native';
import GiftedListView from 'react-native-gifted-listview';
import LibraryItem from './LibraryItem';
import LibraryDetail from './LibraryDetail';
import Utils from '../Utils';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Library extends Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
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
                onLongPress={()=>{
                    /*如果已经被借阅,那么久弹出Alert 已被借阅*/
                    if(rowData.statusId===2){
                        alert('此书已经被借阅,请稍晚再来');
                    }else {
                        /*长按弹出确认框,如果确认借阅的话,就发送请求告知后台*/
                        Alert.alert(
                            '确认借阅?',
                            '你是否确认要借阅此图书?',
                            [
                                { text: '取消', onPress: () => {console.log('cancel Pressed')}},
                                { text: '确认', onPress: () => {
                                    this.setState = {
                                        isLoading:false
                                    };
                                    /*TODO:这里是uersid 暂时写死*/
                                    Utils.get(`/library/borrow?id=${rowData.id}&inputBorrower=${44}`,(data)=>{
                                        rowData = {
                                            ...rowData,
                                            statusId: 2,
                                            statusDesc: '已借出'
                                        };
                                        this.setState = {
                                            isLoading: true
                                        };
                                        /*刷新界面*/
                                        this.refs.listView._refresh();
                                    });
                                }}
                            ]
                        );
                    }
                }}

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
                <Spinner visible={this.state.isLoading}/>
                <GiftedListView
                    ref="listView"
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