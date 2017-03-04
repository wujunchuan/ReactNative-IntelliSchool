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
    Image,
    TouchableOpacity
} from 'react-native';
import Utils from '../Utils';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast, {DURATION} from 'react-native-easy-toast';
export default class Express extends Component {
    defaultProps = {
        expressNo: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            expressNo: props.expressNo,
            /*查询结果*/
            query: {
                reason: '...',
                result: {
                    company: '...',
                    no: props.expressNo,
                    list: []
                }
            }
        };
        this._getExpressResultJSON(this.props.expressNo);
    }

    render() {
        const row = [];
        let loading = this.state.isLoading;
        let result = this.state.query.result;
        return (
            <View style={styles.container}>
                <Spinner visible={loading}/>
                <View style={styles.header}>
                    <Text style={styles.headerText}>查询状态:{this.state.query.reason}</Text>
                    <Text style={styles.headerText}>配送方式:{result.company}</Text>
                    <Text style={styles.headerText}>快递单号:{this.state.expressNo}</Text>
                </View>
                <ScrollView
                    style={styles.body}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    automaticallyAdjustContentInsets={false}
                >
                    {/*TODO:JSX循环 see:http://stackoverflow.com/questions/22876978/loop-inside-react-jsx*/}
                    {
                        result.list.forEach((ele, index) => {
                            row.push(<Record key={index} datetime={ele.datetime} remark={ele.remark}
                                             lastest={index + 1 == result.list.length ? true : false}/>);
                        })
                    }
                    {row}
                </ScrollView>
                <Toast ref="toast"
                       position='bottom'
                       style={{backgroundColor: '#FF74B9', opacity: 0.9, width: 210}}
                />
            </View>
        );
    };

    _getExpressResultJSON(expressNo) {
        Utils.get(`/express?no=${expressNo}`, (data) => {
            //没有错误
            if (data.resultcode == 200) {
                this.setState({
                    isLoading: false,
                    query: {
                        resultcode: data.resultcode,
                        reason: data.reason,
                        result: data.result
                    }
                });
            } else {
                this.setState({
                    isLoading: false,
                });
                this.refs.toast.show(`${data.reason},code:${data.error_code}`,1000);
            }
        });
    }
}
/**
 * 一条记录的组件
 * @constructor
 */
function Record(props) {
    return (
        <View style={record.container}>
            <View style={record.left}>
                {props.lastest ?
                    <Image source={require('../../img/Line2.png')} style={{height: 14, width: 14, marginLeft: 18}}/> :
                    <Image source={require('../../img/Line.png')} style={{height: 50, width: 14, marginLeft: 18}}/>
                }
            </View>
            <View style={record.right}>
                <Text style={{fontSize: 8, color: '#CACACA'}}>{props.datetime}</Text>
                <Text style={{fontSize: 9, lineHeight: 12}}>{props.remark}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        height: Utils.getScreenParam().size.height,

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
        marginTop: 20,
        marginBottom: 40
    }
});
const record = StyleSheet.create({
    container: {
        marginTop: -1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: Utils.getScreenParam().size.width,
    },
    left: {
        height: 50,
        width: Utils.getScreenParam().size.width * .1,
        flexDirection: 'row',
    },
    right: {
        height: 50,
        width: Utils.getScreenParam().size.width * .6,
    }
});
