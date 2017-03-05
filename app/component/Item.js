/**
 * ListItem菜单选项的组件
 * @param icon {number} 左侧图标
 * @param title {String} 标题
 * @param size {Object} 传入{height:,width}来调整图标大小
 * @param isLast {bool} 用来判断Item项是不是最后一个,如果是最后一个,就不显示下划线
 * @author junchuan.wu
 * @date :  2017/2/10
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text,TouchableOpacity, Image, Dimensions} from 'react-native'
export default class Item extends Component {
  static defaultProps = {};
  static propTypes = {
    icon:React.PropTypes.number.isRequired,//图片
    title:React.PropTypes.string.isRequired,//题目
    size:React.PropTypes.object,//图片图标大小
    isLast:React.PropTypes.bool,//判断是否是最后一项
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={[this.props.isLast?null:item.itemWithUnderline]} activeOpacity={0.3} onPress={()=>{this.props.onPress()}}>
        <View style={item.itemContainer}>
          <Image
            source={this.props.icon}
            style={[item.itemIcon,this.props.size]}
          />
          <View style={item.itemTitleContainer}>
            <Text style={item.itemTitle}>{this.props.title}</Text>
            {this.props.subtitle?<Text style={item.itemRightText}>{this.props.subtitle}</Text>:<Image source={require('../../img/icon/right_icon.png')} style={item.itemRightImage}/>}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const item = StyleSheet.create({
  itemWithUnderline:{
    borderColor:'#dddddd',
    borderBottomWidth:0.5
  },
  itemContainer:{
    height:44,
    flexDirection:'row',
    alignItems:'center'
  },
  itemIcon:{
    width:25,
    height:25,
    margin:12,
    marginLeft:0,
    marginRight:17
  },
  itemTitleContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:Dimensions.get('window').width*0.8,
    // marginRight:Dimensions.get('window').width*0.02
  },
  itemTitle:{
    fontSize:17
  },
  itemRightText:{
    fontSize:17,
    color:'#888888'
  },
  itemRightImage:{
    width:8,
    height:13
  }
});
