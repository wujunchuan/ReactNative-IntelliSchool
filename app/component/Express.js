/**
 * 快递组件--获取单号
 * @author junchuan.wu
 * @date :  2017/3/4
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
/*Button组件*/
import Button from 'react-native-button';
/*快递查询结果组件*/
import ExpressDetail from './ExpressDetail';
export default class Express extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            disable:true,
            expressNo: '请输入快递单号'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{width: 137, height: 19, fontSize: 12}} value={this.state.expressNo}
                    onFocus={() => {
                        this.setState({expressNo: '',disable:false})
                    }}
                    onChangeText={(state) => {
                        this.setState({expressNo: state})
                    }}
                />
                <Button
                    text={'查询'}
                    disabled={this.state.disable}
                    onPress={() => {
                        this._query();
                    }}>
                    查询
                </Button>
            </View>
        );
    }

    _query = () => {
        this.setState({
            disable:true,
            expressNo: '请输入快递单号'
        });
        this.props.navigator.push({
            component: ExpressDetail,
            name: 'expressDetail',
            passProps: {
                expressNo: this.state.expressNo,
            },
            title: '快递查询结果'
        });
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 63
    },
});