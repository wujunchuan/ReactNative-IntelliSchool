/**
 * 图书信息项
 * @author junchuan.wu
 * @date :  2017/3/5
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Utils from '../Utils';
export default class LibraryItem extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.left}>
                        <Image
                            source={{uri:this.props.rowData.image}}
                            style={{width:70,height:109}}
                        />
                    </View>
                    <View style={styles.right}>
                        <View style={{width:230}}>
                            <Text style={{fontSize:18}} numberOfLines={2}>{this.props.rowData.name}</Text>
                        </View>
                        <View style={{width:230}}>
                            <Text numberOfLines={2} style={{fontSize:11,color:'#9A9A9A'}}>{this.props.rowData.author}</Text>
                        </View>
                        <View style={{paddingRight:10}}>
                            <Text style={[{textAlign:'right'},this.props.rowData.statusId===2?{color:'#FF8383'}:{color:'#83FFA0'}]}>{this.props.rowData.statusDesc}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:Utils.getScreenParam().size.width,
        height:120,
        paddingVertical:6,
        paddingHorizontal:9,
        borderBottomWidth:0.25,
        borderBottomColor:'gray',
        justifyContent:'center'
    },
    wrapper:{
        flexDirection:'row'
    },
    right:{
        width:Utils.getScreenParam().size*.75,
        marginLeft:10,
        justifyContent:'space-between'
    },
    left:{
        width:Utils.getScreenParam().size*.25,
    }
});