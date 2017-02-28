/**
 * 成绩详情
 * @author junchuan.wu
 * @date :  2017/2/28
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'
export default class ScoreDetail extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello world!{this.props.xh}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        marginVertical:100
    }
});