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
    TouchableOpacity
} from 'react-native';

export default class Express extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.tabContent}>
                <TouchableOpacity onPress={()=>null}>{/*TODO:查询快递的方法*/}
                    <View style={styles.button}><Text style={styles.buttonText}>查询快递</Text></View>
                </TouchableOpacity>
            </View>
        )
    };
}
const styles = StyleSheet.create({
    navigator: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
