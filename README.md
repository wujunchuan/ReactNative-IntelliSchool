## 项目简介

智慧校园应用是基于由Facebook主导的`React Native` 开发技术实现的跨平台手机APP,实现了校园信息中心,校园便利服务等功能。这是我2017年本科毕业设计的课题，其前端使用`React Native`，后端使用`Express + MySQL`。

因为后端涉及到教务系统爬虫部分，不便开源。所以只开源了前端部分的代码。

更多细节可移步 `./paper.pdf`

## 程序运行效果图

![运行效果图](http://static.caogfw.cn/JohnTrump/2018-01-24-132050.png)


## 搭建开发环境

1. `Node.js` Version:0.45(长期支持版)

  执行`brew install node`,用到了`Homebrew`,其中`Homebrew`是Mac系统下的包管理工具 注意,`brew`默认安装的node是最新版本,为了稳定,我建议还是选用0.45版本的好,对于如何使用`Homebrew`来选择相对应的包版本,可以参考我这篇博客: [如何通过brew安装指定版本的nodejs](http://www.caogfw.cn/2016/09/05/mac-brew-versions/)

2. `React Native` Version:0.35

3. `watchman`:由Facebook提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager可以快速捕捉文件的变化从而实现实时刷新

  执行`brew install watchman`安装


## 初始化项目

1. 命令行中输入`react-native init ReactNative_intelliSchool`

2. 然后`cd ReactNative_intelliSchool`

3. 执行`react-native run-ios`即可运行ios版本

  > 如果是运行Android版本,则执行`react-native run-android`


## 程序架构图

因为我要实现两端共用同一套代码，但是在交互逻辑上又有区别的效果（Android使用抽屉作为菜单，iOS使用底部TabBar作为菜单），所以我再程序入口做了一层判断，调用不同的逻辑。除此之外，其他的组件基本上都是复用的。

下面是程序运行的大体流程：

![程序运行流程图](http://static.caogfw.cn/JohnTrump/2018-01-24-131710.png)