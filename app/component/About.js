/**
 * 关于我们\意见反馈的WebView
 * @author junchuan.wu
 * @date :  2017/3/5
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    WebView
} from 'react-native';
import Utils from '../Utils';
export default class About extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.tabContent}>
                <WebView
                    source={{uri:this.props.url}}
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