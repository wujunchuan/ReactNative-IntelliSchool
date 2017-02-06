/**
 * Created by JohnTrump on 10/16/16.
 * Description: 点击学院新闻的具体item后进入的学院新闻详情页面
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
    WebView
} from 'react-native';
import Utils from '../Utils'
export default class NewsDetail extends Component {
    static defaultProps = {
        sysId:'20161212100000000765'
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tabContent}>
                <WebView
                    source={{uri:'http://se.xmut.edu.cn/articleDetail/'+this.props.sysId}}
                    style={styles.webSize}
                    startInLoadingState={true}
                    backButtonEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    webSize:{
        width:Utils.getScreenParam().size.width,
        height:Utils.getScreenParam().size.height,
        marginTop: Platform.OS==='ios'?0:56
    }
});
