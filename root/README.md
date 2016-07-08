# README

> 一个全新的JavaScript开发流程!


## 开发准备
1. 安装[Node.js](https://nodejs.org)
2. 全局安装rollup、grunt-cli、grunt-init、live-server、jshint，也就是`npm install -g rollup grunt-cli grunt-init live-server jshint`
3. 在你的个人主目录**`C:\Users\(用户名)`**开启终端执行以下代码:
`git clone https://github.com/devtip/rollupjs-template.git \.grunt-init/rollupjs-tempalte`


## 功能
- 在你的项目目录执行`grunt-init rollupjs-template`即可初始化该模板
- 使用[Rollup](http://rollupjs.org/)打包工具来构建我们的产品
- 使用[UglifyJS](https://github.com/mishoo/UglifyJS2)对最终产品代码进行压缩
- 使用基于Node.js之上的[Live Server服务器](https://www.npmjs.com/package/live-server)，加快开发进度
- 使用[Qunit](http://www.qunitjs.com/)测试JavaScript代码
- 使用[JSHint](http://jshint.com/)检测代码质量


## 使用
- 在当前文件夹执行`npm install`安装依赖模块
- `npm start`运行内建的服务器,端口冲突可以通过package.json来更改端口号，默认为52233
- `npm run build`构建代码并且支持代码监测并重新编译、压缩
- `npm run jshint`进行代码质量验证


## 说明
/test/       --- Qunit.js测试目录
/src/mod     --- 子模块文件
/src/main.js --- 入口模块
/build/      --- Rollup最终打包后的文件存放目录