# 项目简介

智慧校园应用是基于由Facebook主导的`React Native` 开发技术实现的跨平台手机APP,实现了校园信息中心,校园便利服务等功能


# 搭建开发环境

1. `Node.js` Version:0.45(长期支持版)

  执行`brew install node`,用到了`Homebrew`,其中`Homebrew`是Mac系统下的包管理工具 注意,`brew`默认安装的node是最新版本,为了稳定,我建议还是选用0.45版本的好,对于如何使用`Homebrew`来选择相对应的包版本,可以参考我这篇博客: [如何通过brew安装指定版本的nodejs](http://www.caogfw.cn/2016/09/05/mac-brew-versions/)

2. `React Native` Version:0.35

3. `watchman`:由Facebook提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager可以快速捕捉文件的变化从而实现实时刷新

  执行`brew install watchman`安装

4. `Flow`:Flow是一个静态的JS类型检查工具

  > 这个flow工具的语法并不属于ES标准，只是Facebook自家的代码规范。,我还没有去研究,先安装上,如果没有必要,可以移除掉.:bangbang:

5. `Nuclide`:由Facebook提供的基于atom的集成开发环境，可用于编写、运行和 调试React Native应用

# 初始化项目

1. 命令行中输入`react-native init ReactNative_intelliSchool`

2. 然后`cd ReactNative_intelliSchool`

3. 执行`react-native run-ios`即可运行ios版本

  > 如果是运行Android版本,则执行`react-native run-android`

# 理解React Native Component生命周期

> 任何学习一门新技术新框架,理解好其运行的生命周期是尤为重要的,这样能避免你踩入各种各样的坑,帮助你合理的组织代码逻辑.---我说的

就像Android 四大组件一样,React Native Component也有自己的生命周期

![盗用别人的图下](http://7rf9ir.com1.z0.glb.clouddn.com/3-3-component-lifecycle.jpg)

如图,可以将组件生命周期大致分为三个阶段:

- 第一个阶段:组件的第一次绘制阶段,**完成组件的加载和初始化**

- 第二个阶段:组件的运行和交互阶段,**处理用户交互,接收事件更新界面**

- 第三个阶段:组建卸载消亡阶段,**完成一些组建清理工作**

> 下面开始逐个介绍这些生命周期回调函数的用法

> 注意,[n]代表整个生命周期内可以被调用n次

> {boolean}代表是否可以使用`setState()`

## getDefaultProps() [1] {false}

在**组件被创建前**调用,严格意义上来说,**不是**组件生命周期的一部分

## getInitialState() [1] {false}

在**组件被创建并且加载后**,调用这个回调来**初始化组件状态**

## componentWillMount() [1] {true}

在**组件被渲染之前[第一次被渲染]**,在这里可以做一些业务上的 **优化操作**,也可以设置组件的状态

## render() [>=1] {false}

这个不用多解释,就是在渲染组件的,在整个生命周期中可以被调用很多次

## componentDidMount() [1] {true}

在组件 **第一次** 执行`render()`之后执行 在调用的时候, **Virtual DOM已经构建完成** ,可以在这个函数内开始获取其中的元素或者子组件

:bangbang:需要注意的是RN框架是先调用子组件的`componentDidMount()`再调用父组件的函数..

从这个函数开始,就可以和其他JS框架进行交互,例如设置计时器,发起网络请求等,在这个函数后,组件进入稳定的运行状态,等待事件的触发

## componentWillReceiveProps(Object nextProps) [>=0] {true}

在这里可以根据属性的变化调用`this.setState()`来更新组件的状态,在这里调用更新组件的状态是**不会触发额外的`render()`**

## shouldComponentUpdate(Object nextProps,Object nextState) [>=0] {false}

当组件收到新的属性和状态改变,就会调用这个回调,函数的返回值决定**是否需要更新组件**,`true`表示需要更新,继续走下面的流程,否则不更新,进入等待状态 默认情况,这个函数永远返回`true`来保证数据的及时更新,可以重载这个函数,通过检查前后属性和状态,决定是否更新,以提高性能

## componentWillUpdate [>=0] {false}

如果`shouldComponentUpdate(Object nextProps,Object nextState)`返回值为`true`,就会准备开始更新组件(调用`render()`).在渲染组件前调用此方法 这个函数调用后会将`nextProps`和`nextState`绑定到`this.props`和`this.state`

## componentDidUpdate(Object prevProps,Object prevState) [>=0] {false}

调用`render()`后会调用这个回调

## componentWillUnmount [1] {false}

当组件要被移除的时候,对组件进行一些相关的处理工作 例如取消定时器,取消网络请求等

参考阅读: [React Native中组件的生命周期](http://www.race604.com/react-native-component-lifecycle/) [D23:生命周期回调函数总结(2016-9-26)](https://github.com/crazycodeboy/RNStudyNotes/tree/master/React%20Native%20%E6%AF%8F%E6%97%A5%E4%B8%80%E5%AD%A6#d23生命周期回调函数总结2016-9-26)

# 开发工具

使用`webStrom` 作为开发工具.

> 因为`webStrom`对JSX支持很好,但是默认是使用ES5/6的语法,所以我们需要进入在设置中设置 ![设置JSX为语言类型](http://git.oschina.net/uploads/images/2016/1016/205629_f2a4cbf3_541293.png "设置JSX为图片类型")

## 补充JSX语法提示

嫌弃JSX语法提示不够多的,可以尝试使用这个开源库 `git clone https://github.com/virtoolswebplayer/ReactNative-LiveTemplate` clone之后`file -> import settings -> ReactNative.jar`

### 组件提示

直接输入组件 或 Api 名称的首字母, 比如想要 View ,只要输入 V自动提示代码里就会看到 View

### StyleSheet提示

按下`Command+J`然后输入属性名的首字母即可
