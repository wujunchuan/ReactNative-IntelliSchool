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
  
# 开发工具

使用`webStrom` 作为开发工具.

> 因为`webStrom`对JSX支持很好,但是默认是使用ES5/6的语法,所以我们需要进入在设置中设置
> ![设置JSX为语言类型](http://git.oschina.net/uploads/images/2016/1016/205629_f2a4cbf3_541293.png "设置JSX为图片类型")

### 补充JSX语法提示

嫌弃JSX语法提示不够多的,可以尝试使用这个开源库
`git clone https://github.com/virtoolswebplayer/ReactNative-LiveTemplate`
clone之后`file -> import settings -> ReactNative.jar`

#### 组件提示

直接输入组件 或 Api 名称的首字母, 比如想要 View ,只要输入 V自动提示代码里就会看到 View

#### StyleSheet提示

按下`Command+J`然后输入属性名的首字母即可
