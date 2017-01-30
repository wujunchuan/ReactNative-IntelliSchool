/**
 * 列表项--无图片
 * @author junchuan.wu
 * @date :  2017/1/30
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import Utils from '../Utils';
export default class NewsItemWithoutPicture extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            /*容器*/
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text numberOfLines={2} style={styles.title}>
                        校企共建"帝启互联网金融学院"签约
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.infoFont}>阅读:15318</Text>
                    <Text style={styles.infoFont}>创新创业部</Text>
                    <Text style={styles.infoFont}>2016-12-14</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: 'white',
        height: 75,
        shadowColor: 'rgba(0,0,0,50)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 0.4,
        paddingHorizontal: 13,
        paddingVertical:8,
        width: Utils.getScreenParam().size.width,
    },
    header: {},
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoFont: {
        color: '#dddedf',
        fontSize: 11
    },
    title: {
        fontSize: 16
    }
});