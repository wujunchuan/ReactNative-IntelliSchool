/**
 * Created by JohnTrump on 10/16/16.
 * Description: 个人中心的组件
 *
 */
`use strict`;
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Platform,
    View,
    Dimensions,
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Item from '../component/Item';
export default class Personal extends Component {
    constructor(props) {
        super(props);
    }
    onButtonPress = () => {
        console.log('hello');
    };


    render() {
        return (
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    style={styles.scrollView}
                >
                    {/*Block1*/}
                    <View style={styles.block}>
                        <Avatar
                            name="John Trump"
                            signal="傻逼程序员"
                            img={{uri: "http://facebook.github.io/react-native/img/opengraph.png?2"}}
                        />
                        <Item icon={require('../../img/icon/topic_icon.png')} title="发布签名"
                              size={{height: 24, width: 26}} isLast={true}/>
                    </View>
                    <LineBlock/>{/*Line Block*/}
                    <View style={styles.block}>
                        <Item icon={require('../../img/icon/notes_icon.png')} title="版本日志" size={{height: 30}}/>
                        <Item icon={require('../../img/icon/bang_icon.png')} title="检查更新" isLast={true}/>
                    </View>
                    <LineBlock/>{/*Line Block*/}
                    <View style={styles.block}>
                        <Item icon={require('../../img/icon/start_icon.png')} title="建议反馈"/>
                        <Item icon={require('../../img/icon/more_icon.png')} title="关于我们" size={{height: 6}}
                              isLast={true}/>
                    </View>
                    <LineBlock/>{/*Line Block*/}
                    <View style={styles.block}>
                        {/*Exit*/}
                        <Item icon={require('../../img/icon/tataquan_focus.png')} title="退出登录"/>
                    </View>
                    <LineBlock/>{/*Line Block*/}
                </ScrollView>
        );
    };
}
/*块与块之间的间隔组件*/
function LineBlock(props) {
    return (
        <View style={styles.lineBlock}/>
    )
}
/*头像组件*/
function Avatar(props) {
    return(
        <TouchableOpacity style={avatar.avatarContainer} activeOpacity={0.3}>
            {/*Avatar*/}
            <Image
                source={props.img}
                style={avatar.avatarImage}
            />
            {/*name and signature*/}
            <View style={avatar.avatarCenterContainer}>
                <Text style={avatar.avatarCenterTitle}>{props.name}</Text>
                <Text style={avatar.avatarCenterSubtitle}>{props.signal}</Text>
            </View>
            {/*Right icon*/}
            <View style={avatar.avatarRightContainer}>
                <Image
                    source={require('../../img/icon/right_icon.png')}
                    style={avatar.avatarRightIcon}
                />
            </View>
        </TouchableOpacity>
    )
}
const avatar = StyleSheet.create({
    avatarContainer:{
        flexDirection:'row',
        borderColor:'#dddddd',
        borderBottomWidth:0.5
    },
    avatarImage:{
        borderRadius:30,
        width:60,
        height:60,
        margin:15,
        marginLeft:0
    },
    avatarCenterContainer:{
        justifyContent:'center',
        width:Dimensions.get('window').width*0.685
    },
    avatarCenterTitle:{
        fontSize:16,
        marginVertical:5
    },
    avatarCenterSubtitle:{
        fontSize:14,
        marginVertical:5
    },
    avatarRightContainer:{
        justifyContent:'center',
    },
    avatarRightIcon:{
        width:8,
        height:13
    },
});
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor:'#ffffff',
        marginTop: Platform.OS==='ios'?64:56,
        paddingBottom:Platform.OS === 'ios' ? 50 : 20
    },
    container: {},
    lineBlock:{
        width:Dimensions.get('window').width,
        height:11,
        backgroundColor:'#ededed'
    },
    block:{
        left:16
    },
    ad:{
        width:Dimensions.get('window').width,
        height:120
    },

});
