/**
 * 列表项--有图片
 * @author junchuan.wu
 * @date :  2017/1/30
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Utils from '../Utils';
export default class NewsItemWithPicture extends Component {
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
                <View style={styles.containerLeft}>
                    <Text numberOfLines={2} style={styles.title}>
                        校企共建"帝启互联网金融学院"签约及揭牌仪式顺利召开
                        校企共建"帝启互联网金融学院"签约及揭牌仪式顺利召开
                    </Text>
                    <View style={styles.info}>
                        <Text style={styles.infoFont}>阅读:15318</Text>
                        <Text style={styles.infoFont}>创新创业部</Text>
                        <Text style={styles.infoFont}>2016-12-14</Text>
                    </View>
                </View>
                <View style={styles.containerRight}>
                    <Image style={styles.img}
                           source={{uri: 'http://se.xmut.edu.cn/file/2016/12/14/14816866788163T17T.png'}}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent:'space-between',
        marginBottom: 8,
        height: 75,
        width: Utils.getScreenParam().size.width,
        shadowColor: 'rgba(0,0,0,50)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 2,
        shadowOpacity: 0.4,
    },
    /*左边*/
    containerLeft: {
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 13,
        marginRight:8,
        width:Utils.getScreenParam().size.width*0.68,/*左边占68%*/
    },
    /*右边,放照片*/
    containerRight: {

    },
    img: {
        width: Utils.getScreenParam().size.width*0.24,
        height: 60,
        marginTop: 8,
        marginRight: 13
    },
    info: {
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