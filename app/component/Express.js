/**
 * @author junchuan.wu
 * @date :  2017/1/10
 * 快递查询组件
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Utils from '../Utils';
export default class Express extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>查询状态:查询物流信息成功</Text>
                    <Text style={styles.headerText}>配送方式:中通快递</Text>
                    <Text style={styles.headerText}>快递单号:426238134907</Text>
                </View>
                <ScrollView style={styles.body} contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
                    <PastRecord></PastRecord>
                </ScrollView>
            </View>
        )
    };
}
/**
 * 过去的记录组件
 * @constructor
 */
function PastRecord(props) {
    return (
        <View style={record.container}>
            <View style={record.left}>

            </View>
            <View style={record.right}>

            </View>
        </View>
    );
}
/**
 * 现在的记录组件
 * @constructor
 */
function NowRecord() {

}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    header: {
        marginTop: 65,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        borderColor: '#BCBCBC',
        borderWidth: 0.5
    },
    headerText: {
        fontSize: 14,
        lineHeight: 30
    },
    body: {
        height: Utils.getScreenParam().size.height,
        marginTop:30,
    }
});
const record = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:Utils.getScreenParam().size.width,
        backgroundColor:'#ff0'
    },
    left:{
        height:50,
        width:Utils.getScreenParam().size.width*.1,
        backgroundColor:'#0f0'
    },
    right:{
        height:50,
        width:Utils.getScreenParam().size.width*.6,
        backgroundColor:'#f0f'
    }
});
