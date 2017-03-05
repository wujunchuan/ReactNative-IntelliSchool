/**
 * 成绩详情
 * @author junchuan.wu
 * @date :  2017/2/28
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text,ScrollView} from 'react-native';
import Utils from './../Utils';
import Spinner from 'react-native-loading-spinner-overlay';

export default class ScoreDetail extends Component {
    static defaultProps = {
        xh:'1321152232'
    };
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
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.isLoading}/>
                <View style={styles.upperContainer}>
                    <View style={styles.personInfo}>
                        <Text style={[styles.upperFontStyle]}>{this.state.info.studentId}</Text>
                        <Text style={[styles.upperFontStyle]}>{this.state.info.name}</Text>
                    </View>
                    <View style={styles.personInfo}>
                        <Text style={[styles.upperFontStyle,{fontSize:12}]}>{this.state.info.campus}</Text>
                        <Text style={[styles.upperFontStyle,{fontSize:12}]}>{this.state.info.classes}</Text>
                    </View>
                </View>
                <View style={styles.belowContainer}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:18, marginTop:20}}>
                        <Text style={styles.tableTitle}>科目名称/学分</Text>
                        <Text style={styles.tableTitle}>成绩</Text>
                    </View>
                    <ScrollView
                        style={styles.scoreWrapper}
                        //坑爹 automaticallyAdjustContentInsets see:http://stackoverflow.com/questions/18967859/ios7-uiscrollview-offset-in-uinavigationcontroller
                        automaticallyAdjustContentInsets={false}
                    >
                        <View style={styles.scoreItem}>
                            <Text>综合项目实训(2.0)</Text>
                            <Text>69分</Text>{/*分是自己加上去的*/}
                        </View>
                        <View style={styles.scoreItem}>
                            <Text>管理与沟通(2.0)</Text>
                            <Text>87分</Text>{/*分是自己加上去的*/}
                        </View>
                        <View style={styles.scoreItem}>
                            <Text>基于Android平台的游戏开发(3.5)</Text>
                            <Text>79分</Text>{/*分是自己加上去的*/}
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop:56
    },
    upperContainer:{
        paddingHorizontal: 20,
        paddingVertical:10,
        backgroundColor:'#4e78be',
    },
    upperFontStyle:{
        color:'#fff',
        fontSize:14,
        lineHeight:28
    },
    personInfo:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    scoreWrapper:{
        paddingHorizontal: 20,
        paddingVertical:10,
        height:Utils.getScreenParam().size.height
    },
    tableTitle:{
        fontSize: 16,
        fontWeight:'900'
    },
    scoreItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    }
});