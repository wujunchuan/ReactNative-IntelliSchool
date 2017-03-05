/**
 * E通卡查询
 * @author junchuan.wu
 * @date :  2017/2/28
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text,TextInput} from 'react-native';
/*Button组件*/
import Button from 'react-native-button';
import Utils from '../Utils';
import Toast, {DURATION} from 'react-native-easy-toast';
import Spinner from 'react-native-loading-spinner-overlay';
export default class Ecard extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            disable:true,
            cardId:'请输入您的卡号',
            isLoading:false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.isLoading}/>
                <TextInput
                    style={{width: 137, height: 19, fontSize: 12}} value={this.state.cardId}
                    onFocus={() => {
                        this.setState({cardId:'',disable:false})
                    }}
                    onChangeText={(state) => {
                        this.setState({cardId: state})
                    }}
                />
                <Button
                    text={'查询'}
                    disabled={this.state.disable}
                    onPress={() => {
                        this._query(this.state.cardId);
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
    _query = (cartId) =>{
        this.setState({
            disable: true,
            isLoading: true,
        });
        Utils.get(`/service/ecard?cardid=${cartId}`, (data) => {
            /*没有错误*/
            this.setState({
                disable: false,
                isLoading: false,
            });
            this.refs.toast.show(`卡号:${data.cardid}(${data.type})剩余余额:${data.money}元，有效期至${data.validity}`,1000);
        },(error)=>{
            this.setState({
                disable: false,
                isLoading: false
            });
            this.refs.toast.show(`查询失败,请检查卡号是否正确`,1000);
        });
    }
};
const styles = StyleSheet.create({
    container: {
        marginTop: 63
    }
});