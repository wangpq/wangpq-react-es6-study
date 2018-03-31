# wangpq-react-es6-study

一个使用官方文档方式安装的react开发环境，支持es6的语法特性，个人对结构做了部分修改，大家可以根据实际情况进行处理。

**本demo使用方法：**

下载本项目到本地，cd进入本项目，然后cnpm install下载依赖包，然后npm start即可运行此demo。使用的几个命令如下：

```bash
cd wangpq-react-es6-study
```

```bash
cnpm install 
```

```bash
npm start
```

本示例使用react-router-dom路由，fetch ajax获取数据并展示。


## 官方文档方式安装react环境

**首先确保全局安装了cnpm,cnpm 全局安装create-react-app模块**
```bash
npm install -g create-react-app
```

**通过create-react-app创建一个经典的hello-world项目**

上一步安装create-react-app模块的时候是全局安装，所以不需要进入到你希望创建项目的那个目录。但这一步建议你先在命令行中cd进入到你希望把项目存放到的目录中，防止等会安装完以后不知道项目存放到了什么位置，然后执行以下命令创建项目
```bash
create-react-app hello-world
```

**进入到项目目录并运行React项目**
```bash
cd hello-world
npm start
```
