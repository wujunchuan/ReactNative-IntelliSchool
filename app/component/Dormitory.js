/**
 * 查询宿舍电费--获取宿舍号
 * @author junchuan.wu
 * @date :  2017/3/4
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'
/*Button组件*/
import Button from 'react-native-button';
import Utils from '../Utils';
import Toast, {DURATION} from 'react-native-easy-toast';
import Spinner from 'react-native-loading-spinner-overlay';
export default class Dormitory extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            disable:true,
            dormitoryId: '请输入宿舍号(如E510)',
            isLoading:false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.isLoading}/>
                <TextInput
                    style={{width: 137, height: 19, fontSize: 12}} value={this.state.dormitoryId}
                    onFocus={() => {
                        this.setState({dormitoryId: '',disable:false})
                    }}
                    onChangeText={(state) => {
                        this.setState({dormitoryId: state})
                    }}
                />
                <Button
                    text={'查询'}
                    disabled={this.state.disable}
                    onPress={() => {
                        this._query(this.state.dormitoryId);
                    }}>
                    查询
                </Button>
                <Toast ref="toast"
                       position='center'
                       style={{backgroundColor: '#FF74B9', opacity: 0.9, width: 210}}
                />
            </View>
        );
    }

    _query = (dormitoryId) => {
        this.setState({
            disable:true,
            isLoading:true,
        });
        Utils.get(`/service/electricity?roomid=${dormitoryId}`, (data) => {
            //没有错误
            this.setState({
                disable:false,
                isLoading: false,
            });
            this.refs.toast.show(`截止${data.updateTime}为止，宿舍号:${data.roomid}还剩电费:${data.power}度`,1000);
        });
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 63
    },
});