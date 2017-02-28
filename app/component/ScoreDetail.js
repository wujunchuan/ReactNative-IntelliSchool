/**
 * 成绩详情
 * @author junchuan.wu
 * @date :  2017/2/28
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Utils from './../Utils';
import Spinner from 'react-native-loading-spinner-overlay';

export default class ScoreDetail extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            info: {
                studentId: '',//学号:1321152232
                name: '',//姓名:吴俊川
                campus: '',//学院:软件工程学院
                grade: '',//专业:软件工程(移动云办公)
                classes: '',//行政班:13软件工程(移动)1
            }
        };
        this._fetch(this.props.xh);
    }

    _fetch = (xh) => {
        console.log('获取到的学号为:' + xh);
        //发送请求
        Utils.get(`/fangzheng/score?xh=${xh}`,(data) => {
            const studentInfo = data.info;
            const scoreInfo = data.score;
            this.setState({
                isLoading: false,//关闭遮罩层
                info:{
                    studentId:studentInfo[0].xh,
                    name:studentInfo[0].xm,
                    campus:studentInfo[0].xy,
                    grade:studentInfo[1].xy,
                    classes:studentInfo[1].bj,
                },
                score:scoreInfo//成绩
            });
            console.log(data);
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.isLoading}/>
                <Text>Hello world!props:{this.props.xh}</Text>
                <Text>学号:{this.state.info.studentId}</Text>
                <Text>姓名:{this.state.info.name}</Text>
                <Text>学院:{this.state.info.campus}</Text>
                <Text>:{this.state.info.grade}</Text>
                <Text>:{this.state.info.classes}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 100
    }
});