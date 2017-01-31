/**
 * 列表项--无图片
 * @author junchuan.wu
 * @date :  2017/1/30
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import Utils from '../Utils';
export default class NewsItemWithoutPicture extends Component {
    static defaultProps = {
        rowData:{
            "title": "init..",
            "sysId": "20161214100000000768",
            "releaseDate": "2016-12-14",
            "editorAuthor": "创新创业部",
            "visits": "19124",
            "images": [
                "/file/2016/12/14/14816866788163T17T.png",
                "/file/2016/12/14/1481686683324xx8av.png",
                "/file/2016/12/14/1481686668660vRKR3.png"
            ]
        }
    };
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
                    <Text numberOfLines={2} style={styles.title}>{this.props.rowData.title}</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.infoFont}>阅读:{this.props.rowData.visits}</Text>
                    <Text style={styles.infoFont}>{this.props.rowData.editorAuthor}</Text>
                    <Text style={styles.infoFont}>{this.props.rowData.releaseDate}</Text>
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
        marginBottom: 8,
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